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
export class MaApiCartService {

  constructor(private apiHttpClient: MaApiHttpClient) { }

  getList(): Observable<MaApiCartListResponse> {
    return this.apiHttpClient.get(`/cart/list`);
  }

  setItem(setItemData: MaApiSetItemData): Observable<MaApiSetItemResponse> {
    return this.apiHttpClient.post(`/cart/setitem`, setItemData);
  }

  setDelivery(data: MaApiSetDeliveryData): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/cart/setdelivery`, data);
  }

  setPayment(data: MaApiSetPaymentData): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/cart/setpayment`, data);
  }

  clear(id: number): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/cart/clear`, { id: id });
  }

  makeOrder(makeOrderData: MaApiMakeOrderData): Observable<MaApiMakeOrderResponse> {
    return this.apiHttpClient.post(`/cart/makeorder`, JSON.stringify(makeOrderData));
  }

  setDiscount(code: string): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/cart/setdiscountcode`, { discount_code: code });
  }

  removeDiscount(): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/cart/removediscountcode`, {});
  }

}
