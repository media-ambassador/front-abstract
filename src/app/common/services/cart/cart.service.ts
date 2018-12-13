import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { MaAuthService } from '../auth/auth.service';
import { MaApiCartService } from '../../modules/api-module/api-cart/api-cart.service';
import { MaApiProductVariation } from '../../modules/api-module/api-product';
import {
  MaApiCartListResponse,
  MaApiSetItemData,
  MaApiSetItemResponse,
  MaApiCartListData,
  MaApiSetDeliveryData,
  MaApiSetPaymentData,
  MaApiDeliveryOption,
  MaApiMakeOrderResponse,
  MaApiCartProduct,
  MaApiMakeOrderData
} from '../../modules/api-module/api-cart/api-cart.model';

import * as _ from 'lodash';
import { MaApiResponse } from '../../modules/api-module';

@Injectable()
export class MaCartService {
  protected sidebarCartOpenSubject$: ReplaySubject<boolean>;
  protected cartListSubject$: ReplaySubject<MaApiCartListResponse<any>>;
  protected relatedProductsData$: ReplaySubject<MaApiProductVariation<any, any, any>[]>;

  protected cartList: MaApiCartListResponse<any>;
  protected cartId: number;

  constructor(protected apiCartService: MaApiCartService<MaApiCartListResponse<any>,
                                                         MaApiSetItemData,
                                                         MaApiSetItemResponse<any>,
                                                         MaApiSetDeliveryData,
                                                         MaApiResponse,
                                                         MaApiSetPaymentData,
                                                         MaApiMakeOrderData<any>,
                                                         MaApiMakeOrderResponse>,
              protected authService: MaAuthService) {

    this.sidebarCartOpenSubject$ = new ReplaySubject<boolean>(1);
    this.cartListSubject$ = new ReplaySubject<MaApiCartListResponse<any>>(1);
    this.relatedProductsData$ = new ReplaySubject<MaApiProductVariation<any, any, any>[]>(1);

    this.authService.watchAuthorized().subscribe(() => this.refreshCartList());
  }

  getCartList(): Observable<MaApiCartListResponse<any>> {
    return this.apiCartService.getList().pipe(
      tap(data => this.updateCartList(data))
    );
  }

  refreshCartList(): void {
    const subscription = this.apiCartService.getList().subscribe(data => {
      subscription.unsubscribe();
      this.updateCartList(data);
    });
  }

  protected updateCartList(data: MaApiCartListResponse<any>) {
    if (!data.action_status) {
      this.cartId = null;
      this.cartList = null;

      return;
    }

    this.cartList = data;
    this.cartId = data.data.id as number;
    this.cartListSubject$.next(data);
  }

  watchCartList(): Observable<MaApiCartListResponse<any>> {
    return this.cartListSubject$.asObservable();
  }

  getProduct(id: string): MaApiCartProduct<any, any, any, any> {
    return _.find(this.cartList.data.items, item => {
      return item.product_id === id;
    });
  }

  getCartData(): MaApiCartListData<any, any, any, any, any, any, any> {
    return this.cartList ? this.cartList.data : null;
  }

  getItemsCount(): number {
    let total = 0;
    Object.keys(this.cartList.data.items).forEach(key => {
      total += this.cartList.data.items[key].quantity;
    });

    return total;
  }

  getCartId(): number {
    return this.cartId;
  }

  watchSidebarCartOpen(): Observable<boolean> {
    return this.sidebarCartOpenSubject$.asObservable();
  }

  watchRelatedProducts(): Observable<MaApiProductVariation<any, any, any>[]> {
    return this.relatedProductsData$.asObservable();
  }

  protected updateRelatedProducts(response: MaApiSetItemResponse<any>) {
    !!response.data && response.data.related_products
      ? this.relatedProductsData$.next(response.data.related_products)
      : this.relatedProductsData$.next(null);
  }

  addElement(productId: number): Observable<MaApiSetItemResponse<any>> {
    const cartProduct = this.getProduct(productId.toString());
    const quantity = !!cartProduct ? cartProduct.quantity + 1 : 1;

    return this.changeQuantity(productId, quantity);
  }

  removeElement(productId: number): Observable<MaApiSetItemResponse<any>> {
    return this.changeQuantity(productId, 0);
  }

  clear(): void {
    const subscriber = this.apiCartService.clear(this.cartId).subscribe(() => {
      this.refreshCartList();
      subscriber.unsubscribe();
    });
  }

  changeQuantity(productId: number, quantity: number): Observable<MaApiSetItemResponse<any>> {
    const itemData: MaApiSetItemData = {
      product_id: productId,
      quantity: quantity
    };

    return this.apiCartService.setItem(itemData).pipe(
      tap(response =>  {
        this.updateRelatedProducts(response);
        this.refreshCartList();
      }));
  }

  changeSize(oldProductId: number, newProductId: number, quantity: number): Observable<MaApiSetItemResponse<any>> {
    const itemData: MaApiSetItemData = {
      product_id: newProductId,
      quantity: quantity
    };

    this.removeElement(oldProductId).subscribe();

    return this.apiCartService.setItem(itemData).pipe(
      tap(response =>  {
        this.updateRelatedProducts(response);
        this.refreshCartList();
      }));
  }

  setDelivery(id: number, parcel: string = null): void {
    const data: MaApiSetDeliveryData = {
      delivery_id: id,
      delivery_parcel_code_preferred: parcel
    };

    this.apiCartService.setDelivery(data).subscribe(response => {
      if (response.action_status) {
        this.refreshCartList();
      }
    });
  }

  getSelectedDeliveryOption(): MaApiDeliveryOption<any, any> {
    const selected = this.cartList.data.delivery.selected;

    if (!selected) {
      return null;
    }

    return this.cartList.data.delivery.options[selected];
  }

  isDeliveryInpost(): boolean {
    if (!this.cartList.data.delivery.selected) {
      return false;
    }

    const selectedOption = this.getSelectedDeliveryOption();
    return selectedOption ? selectedOption.abbrev === 'inpost' : false;
  }

  isSalonDelivery(): boolean {
    if (!this.cartList.data.delivery.selected) {
      return false;
    }

    const selectedOption = this.getSelectedDeliveryOption();
    return selectedOption ? selectedOption.code.indexOf('salon_') >= 0 : false;
  }

  setPayment(type: string) {
    const data: MaApiSetPaymentData = {
      payment_type: type
    };

    this.apiCartService.setPayment(data).subscribe(response => {
      if (response.action_status) {
        this.refreshCartList();
      }
    });
  }

  makeOrder(makeOrderData: any): Observable<MaApiMakeOrderResponse> {
    return this.apiCartService.makeOrder(makeOrderData).pipe(
      tap(response => {
        if (response.action_status) {
          this.refreshCartList();
        } else {
          if (!!response.data.reload) {
            this.refreshCartList();
          }
        }
      })
    );
  }

  validateCart(): boolean {
    const selectedOption = this.getSelectedDeliveryOption();

    return !!selectedOption
           && !!this.cartList.data.payment.selected
           && (!this.isDeliveryInpost() || (this.isDeliveryInpost() && !!selectedOption.parcel_shop && !!selectedOption.parcel_shop.code))
           && (!this.isSalonDelivery() || (this.isSalonDelivery() && !!selectedOption.parcel_shop && !!selectedOption.parcel_shop.code));
  }
}
