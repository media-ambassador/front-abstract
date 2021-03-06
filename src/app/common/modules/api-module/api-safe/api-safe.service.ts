import { Injectable } from '@angular/core';
import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';

import { MaApiSafeCreateResponse } from './api-safe.model';
import {
  MaApiResponse,
  MaApiPriceDetails,
  MaApiPriceCurrency,
  MaApiPriceInfo
} from '../api-common.model';

import {
  MaApiSetItemResponse,
  MaApiSetItemData,
  MaApiCartListResponse,
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
  MaApiCartPriceInfo
} from '../api-cart/api-cart.model';

import {
  MaApiProductPrice,
  MaApiProductDiscount,
  MaApiProductSize,
  MaApiProductVariation,
  MaApiProductAttribute,
  MaApiProductImage
} from '../api-product';
import { MaApiShopData } from '../api-shop';

@Injectable()
export class MaApiSafeService<CR extends MaApiCartListResponse<MaApiCartListData<MaApiPayment<MaApiPaymentOption>,
                                                               MaApiPriceDetails<MaApiPriceCurrency>,
                                                               MaApiDeliveryParcelData,
                                                               MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                               MaApiProductDiscount< MaApiPriceDetails<MaApiPriceCurrency>>,
                                                               MaApiDelivery<MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>>,
                                                               MaApiCartProduct<MaApiCartProductAttribute,
                                                               MaApiPriceDetails<MaApiPriceCurrency>,
                                                               MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                               MaApiProductSize>>>,
                              IR extends MaApiSetItemResponse<MaApiProductVariation<MaApiProductAttribute,
                                                              MaApiProductImage,
                                                              MaApiShopData>>,
                              SR extends MaApiSafeCreateResponse,
                              R extends MaApiResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getList(): Observable<CR> {
    return this.apiHttpClient.get(`/safe/list`);
  }

  setItem(setItemData: MaApiSetItemData): Observable<IR> {
    return this.apiHttpClient.post(`/safe/setitem`, setItemData);
  }

  clear(): Observable<R> {
    return this.apiHttpClient.post(`/safe/clear`, { });
  }

  create(): Observable<SR> {
    return this.apiHttpClient.post(`/safe/create`, { });
  }

  addAllToCart(removeAll = false): Observable<R> {
    return this.apiHttpClient.post(`/safe/addalltocart`, { removeItems: removeAll });
  }

}
