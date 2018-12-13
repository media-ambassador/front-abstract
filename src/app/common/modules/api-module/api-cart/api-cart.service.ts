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
  MaApiCartListData,
  MaApiPayment,
  MaApiPaymentOption,
  MaApiDeliveryParcelData,
  MaApiDelivery,
  MaApiDeliveryOption,
  MaApiParcelShopData,
  MaApiCartProduct,
  MaApiCartProductAttribute,
  MaApiCartPrice,
  MaApiCartPriceInfo,
  MaApiMakeOrderAddressData,
} from './api-cart.model';

import {
  MaApiResponse,
  MaApiPriceDetails,
  MaApiPriceCurrency,
  MaApiPriceInfo
} from '../api-common.model';

import {
  MaApiProductPrice,
  MaApiProductDiscount,
  MaApiProductSize,
  MaApiProductVariation,
  MaApiProductAttribute,
  MaApiProductImage
} from '../api-product';

import { MaApiShopData } from '../api-shop';
import { MaApiAddressData, MaApiAddressType, MaApiInvoiceData } from '../api-address';

@Injectable()
export class MaApiCartService<CR extends MaApiCartListResponse<MaApiCartListData<MaApiPayment<MaApiPaymentOption>,
                                                               MaApiPriceDetails<MaApiPriceCurrency>,
                                                               MaApiDeliveryParcelData,
                                                               MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                               MaApiProductDiscount< MaApiPriceDetails<MaApiPriceCurrency>>,
                                                               MaApiDelivery<MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>>,
                                                               MaApiCartProduct<MaApiCartProductAttribute,
                                                               MaApiPriceDetails<MaApiPriceCurrency>,
                                                               MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                               MaApiProductSize>>>,
                              ID extends MaApiSetItemData,
                              IR extends MaApiSetItemResponse<MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>,
                              DD extends MaApiSetDeliveryData,
                              R extends MaApiResponse,
                              PD extends MaApiSetPaymentData,
                              OD extends MaApiMakeOrderData<MaApiMakeOrderAddressData<MaApiAddressData<MaApiAddressType>, MaApiInvoiceData>>,
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
