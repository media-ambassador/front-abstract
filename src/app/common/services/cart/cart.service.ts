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
export class MaCartService<CLR extends MaApiCartListResponse<any>,
                           PV extends MaApiProductVariation<any, any, any>,
                           CP extends MaApiCartProduct<any, any, any, any>,
                           CLD extends MaApiCartListData<any, any, any, any, any, any, any>,
                           IR extends MaApiSetItemResponse<any>,
                           MO extends MaApiMakeOrderResponse,
                           SPD extends MaApiSetPaymentData,
                           DO extends MaApiDeliveryOption<any, any>,
                           DD extends MaApiSetDeliveryData,
                           SID extends MaApiSetItemData> {

  protected sidebarCartOpenSubject$: ReplaySubject<boolean>;
  protected cartListSubject$: ReplaySubject<CLR>;
  protected relatedProductsData$: ReplaySubject<PV[]>;

  protected cartList: CLR;
  protected cartId: number;

  constructor(protected apiCartService: MaApiCartService<CLR,
                                                         SID,
                                                         IR,
                                                         DD,
                                                         MaApiResponse,
                                                         SPD,
                                                         MaApiMakeOrderData<any>,
                                                         MO>,
              protected authService: MaAuthService<any, any, any, any, any, any, any, any, any, any>) {

    this.sidebarCartOpenSubject$ = new ReplaySubject<boolean>(1);
    this.cartListSubject$ = new ReplaySubject<CLR>(1);
    this.relatedProductsData$ = new ReplaySubject<PV[]>(1);

    this.authService.watchAuthorized().subscribe(() => this.refreshCartList());
  }

  getCartList(): Observable<CLR> {
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

  protected updateCartList(data: CLR) {
    if (!data.action_status) {
      this.cartId = null;
      this.cartList = null;

      return;
    }

    this.cartList = data;
    this.cartId = data.data.id as number;
    this.cartListSubject$.next(data);
  }

  watchCartList(): Observable<CLR> {
    return this.cartListSubject$.asObservable();
  }

  getProduct(id: string): CP {
    return _.find(this.cartList.data.items, item => {
      return item.product_id === id;
    });
  }

  getCartData(): CLD {
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

  watchRelatedProducts(): Observable<PV[]> {
    return this.relatedProductsData$.asObservable();
  }

  protected updateRelatedProducts(response: IR) {
    !!response.data && response.data.related_products
      ? this.relatedProductsData$.next(response.data.related_products)
      : this.relatedProductsData$.next(null);
  }

  addElement(productId: number): Observable<IR> {
    const cartProduct = this.getProduct(productId.toString());
    const quantity = !!cartProduct ? cartProduct.quantity + 1 : 1;

    return this.changeQuantity(productId, quantity);
  }

  removeElement(productId: number): Observable<IR> {
    return this.changeQuantity(productId, 0);
  }

  clear(): void {
    const subscriber = this.apiCartService.clear(this.cartId).subscribe(() => {
      this.refreshCartList();
      subscriber.unsubscribe();
    });
  }

  changeQuantity(productId: number, quantity: number): Observable<IR> {
    const itemData = {
      product_id: productId,
      quantity: quantity
    } as SID;

    return this.apiCartService.setItem(itemData).pipe(
      tap(response =>  {
        this.updateRelatedProducts(response);
        this.refreshCartList();
      }));
  }

  changeSize(oldProductId: number, newProductId: number, quantity: number): Observable<IR> {
    const itemData = {
      product_id: newProductId,
      quantity: quantity
    } as SID;

    this.removeElement(oldProductId).subscribe();

    return this.apiCartService.setItem(itemData).pipe(
      tap(response =>  {
        this.updateRelatedProducts(response);
        this.refreshCartList();
      }));
  }

  setDelivery(id: number, parcel: string = null): void {
    const data = {
      delivery_id: id,
      delivery_parcel_code_preferred: parcel
    } as DD;

    this.apiCartService.setDelivery(data).subscribe(response => {
      if (response.action_status) {
        this.refreshCartList();
      }
    });
  }

  getSelectedDeliveryOption(): DO {
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
    const data = {
      payment_type: type
    } as SPD;

    this.apiCartService.setPayment(data).subscribe(response => {
      if (response.action_status) {
        this.refreshCartList();
      }
    });
  }

  makeOrder(makeOrderData: any): Observable<MO> {
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
