import { Injectable } from '@angular/core';
import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';

import {
  MaApiCartListResponse,
  MaApiSetItemData,
  MaApiSetItemResponse,
  MaApiSetDeliveryData,
  MaApiSetPaymentData,
  MaApiMakeOrderData,
  MaApiMakeOrderResponse,
} from './api-cart.model';
import { MaApiResponse } from '../api-common.model';

@Injectable()
export class MaApiCartService<CR extends MaApiCartListResponse,
                              ID extends MaApiSetItemData,
                              IR extends MaApiSetItemResponse,
                              DD extends MaApiSetDeliveryData,
                              R extends MaApiResponse,
                              PD extends MaApiSetPaymentData,
                              OD extends MaApiMakeOrderData,
                              OR extends MaApiMakeOrderResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getList(): Observable<CR> {
    return this.apiHttpClient.get(`/cart/list`);
  }

  setItem(setItemData: ID): Observable<IR> {
    return this.apiHttpClient.post(`/cart/setitem`, setItemData);
  }

  setDelivery(data: DD): Observable<R> {
    return this.apiHttpClient.post(`/cart/setdelivery`, data);
  }

  setPayment(data: PD): Observable<R> {
    return this.apiHttpClient.post(`/cart/setpayment`, data);
  }

  clear(id: number): Observable<R> {
    return this.apiHttpClient.post(`/cart/clear`, { id: id });
  }

  makeOrder(makeOrderData: OD): Observable<OR> {
    return this.apiHttpClient.post(`/cart/makeorder`, JSON.stringify(makeOrderData));
  }

  setDiscount(code: string): Observable<R> {
    return this.apiHttpClient.post(`/cart/setdiscountcode`, { discount_code: code });
  }

  removeDiscount(): Observable<R> {
    return this.apiHttpClient.post(`/cart/removediscountcode`, {});
  }

}
