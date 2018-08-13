import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { MaAuthService } from '../auth/auth.service';
import { MaApiCartService } from '../../modules/api-module/api-cart/api-cart.service';
import {
  MaApiCartListResponse,
  MaApiSetItemData,
  MaApiSetItemResponse,
  MaApiCartListData,
  MaApiSetDeliveryData,
  MaApiSetPaymentData,
  MaApiDeliveryOption,
  MaApiMakeOrderResponse,
  MaApiCartProduct
} from '../../modules/api-module/api-cart/api-cart.model';

import * as _ from 'lodash';

@Injectable()
export class MaCartService {
  private sidebarCartOpenSubject$: ReplaySubject<boolean>;
  private cartListSubject$: ReplaySubject<MaApiCartListResponse>;

  private cartList: MaApiCartListResponse;
  private cartId: number;

  constructor(protected apiCartService: MaApiCartService,
              protected authService: MaAuthService) {

    this.sidebarCartOpenSubject$ = new ReplaySubject<boolean>(1);
    this.cartListSubject$ = new ReplaySubject<MaApiCartListResponse>(1);

    this.authService.watchAuthorized().subscribe(() => this.refreshCartList());
  }

  getCartList(): Observable<MaApiCartListResponse> {
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

  private updateCartList(data: MaApiCartListResponse) {
    if (!data.action_status) {
      this.cartId = null;
      this.cartList = null;

      return;
    }

    this.cartList = data;
    this.cartId = data.data.id as number;
    this.cartListSubject$.next(data);
  }

  watchCartList(): Observable<MaApiCartListResponse> {
    return this.cartListSubject$.asObservable();
  }

  getProduct(id: string): MaApiCartProduct {
    return _.find(this.cartList.data.items, item => {
      return item.product_id === id;
    });
  }

  getCartData(): MaApiCartListData {
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

  addElement(productId: number): Observable<MaApiSetItemResponse> {
    const cartProduct = this.getProduct(productId.toString());
    const quantity = !!cartProduct ? cartProduct.quantity + 1 : 1;

    return this.changeQuantity(productId, quantity);
  }

  removeElement(productId: number): Observable<MaApiSetItemResponse> {
    return this.changeQuantity(productId, 0);
  }

  clear(): void {
    const subscriber = this.apiCartService.clear(this.cartId).subscribe(() => {
      this.refreshCartList();
      subscriber.unsubscribe();
    });
  }

  changeQuantity(productId: number, quantity: number): Observable<MaApiSetItemResponse> {
    const itemData: MaApiSetItemData = {
      product_id: productId,
      quantity: quantity
    };

    return this.apiCartService.setItem(itemData).pipe(
      tap(response => this.refreshCartList())
    );
  }

  setDelivery(id: number, parcel: string = null): void {
    const data: MaApiSetDeliveryData = {
      delivery_id: id,
      parcel_shop: parcel
    };

    this.apiCartService.setDelivery(data).subscribe(response => {
      if (response.action_status) {
        this.refreshCartList();
      }
    });
  }

  getSelectedDeliveryOption(): MaApiDeliveryOption {
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
           && (!this.isDeliveryInpost() || (this.isDeliveryInpost() && !!selectedOption.parcel_shop));
  }
}
