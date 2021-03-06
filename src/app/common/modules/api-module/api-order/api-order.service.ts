import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiPriceCurrency, MaApiPriceDetails, MaApiPriceInfo } from '..';
import { MaApiCartPrice, MaApiCartPriceInfo, MaApiDeliveryOption, MaApiPaymentOption } from '../api-cart';
import { MaApiProductDiscount, MaApiProductPrice, MaApiProductSize } from '../api-product';
import { MaApiAddressData, MaApiAddressType } from '../api-address';
import { MaApiParcelShopData, MaApiDeliveryParcelData } from '../api-cart/api-cart.model';
import {
  MaApiOrderResponse,
  MaApiOrderListData,
  MaApiOrderListItem,
  MaApiOrderStatus,
  MaOrderProductData,
  MaOrderProductAttribute,
  MaOrderProductModel,
  MaOrderProductModelBrand,
  MaOrderProductModelCategory,
  MaOrderProductImage
} from './api-order.model';

@Injectable()
export class MaApiOrderService<OR extends MaApiOrderResponse<MaApiOrderListData<MaApiPriceCurrency,
                                                            MaApiPriceDetails<MaApiPriceCurrency>,
                                                            MaApiOrderListItem<MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                                              MaApiProductDiscount<MaApiPriceDetails<MaApiPriceCurrency>>,
                                                                              MaOrderProductData<MaOrderProductAttribute,
                                                                                                MaOrderProductImage,
                                                                                                MaOrderProductModel<
                                                                                                  MaOrderProductModelBrand,
                                                                                                  MaOrderProductModelCategory
                                                                                                >,
                                                                                                MaApiProductSize>
                                                                              >,
                                                            MaApiAddressData<MaApiAddressType>,
                                                            MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>,
                                                            MaApiPaymentOption,
                                                            MaApiOrderStatus,
                                                            MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>>
                                                            >
                              > {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getOrder(id: string): Observable<OR> {
    return this.apiHttpClient.post(`/order/get`, { id: id });
  }
}
