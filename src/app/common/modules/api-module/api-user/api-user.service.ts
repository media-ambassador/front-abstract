import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse, MaApiPriceCurrency, MaApiPriceDetails, MaApiPriceInfo } from '../api-common.model';
import {
  MaApiUserAuthorizeData,
  MaApiUserAuthorizeResponse,
  MaApiUserRegisterData,
  MaApiUserRegisterResponse,
  MaApiUserTokenResponse,
  MaApiUserChangePasswordData,
  MaApiUserOrderListResponse,
  MaApiUserRemindData,
  MaApiFbAuthorizeData,
  MaApiFbAuthorizeResponse,
  MaApiUserAddressResponse,
  MaApiUserAuthorizeResponseData
} from './api-user.model';
import { MaApiOrderListData, MaApiOrderListItem, MaApiOrderStatus } from '../api-order';
import { MaApiCartPrice, MaApiCartPriceInfo, MaApiDeliveryOption, MaApiPaymentOption } from '../api-cart';
import { MaApiProductDiscount, MaApiProductPrice, MaApiProductImage, MaApiProductSize } from '../api-product';
import { MaApiAddressData, MaApiAddressType, MaApiInvoiceData } from '../api-address';
import { MaApiParcelShopData, MaApiDeliveryParcelData } from '../api-cart/api-cart.model';
import { MaOrderProductData, MaOrderProductAttribute, MaOrderProductModel, MaOrderProductModelBrand, MaOrderProductModelCategory } from '../api-order/api-order.model';

@Injectable()
export class MaApiUserService<UAD extends MaApiUserAuthorizeData,
                              UAR extends MaApiUserAuthorizeResponse<MaApiUserAuthorizeResponseData>,
                              FAD extends MaApiFbAuthorizeData,
                              FAR extends MaApiFbAuthorizeResponse,
                              URD extends MaApiUserRegisterData,
                              URR extends MaApiUserRegisterResponse,
                              UOR extends MaApiUserOrderListResponse<MaApiOrderListData<MaApiPriceCurrency,
                                                                     MaApiPriceDetails<MaApiPriceCurrency>,
                                                                     MaApiOrderListItem<MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                                     MaApiProductDiscount<MaApiPriceDetails<MaApiPriceCurrency>>,
                                                                                          MaOrderProductData<MaOrderProductAttribute,
                                                                                                             MaApiProductImage,
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
                                                                     MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>>>,
                              UADR extends MaApiUserAddressResponse<MaApiAddressData<MaApiAddressType>, MaApiInvoiceData>,
                              UPD extends MaApiUserChangePasswordData,
                              UTR extends MaApiUserTokenResponse<MaApiUserAuthorizeResponseData>,
                              URED extends MaApiUserRemindData,
                              R extends MaApiResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  authorize(authData: UAD): Observable<UAR> {
    return this.apiHttpClient.post(`/user/authorize`, authData);
  }

  fbAuthorize(fbAuthData: FAD): Observable<FAR> {
    return this.apiHttpClient.post(`/user/fbauthorize`, fbAuthData);
  }

  register(registerData: URD): Observable<URR> {
    return this.apiHttpClient.post(`/user/register`, registerData);
  }

  getAddressList(): Observable<UADR> {
    return this.apiHttpClient.get(`/user/addresslist`);
  }
  changePassword(changePasswordData: UPD): Observable<R> {
    return this.apiHttpClient.post(`/user/changepassword`, changePasswordData);
  }

  getOrderList(): Observable<UOR> {
    return this.apiHttpClient.get(`/user/orderlist`);
  }

  token(clear = false): Observable<UTR> {
    const clearParam = clear ? '?clear=true' : '';
    return this.apiHttpClient.get(`/user/token${clearParam}`);
  }

  remind(remindData: URED): Observable<R> {
    return this.apiHttpClient.post(`/user/remindpassword`, remindData);
  }

  getReturnsList(): Observable<UOR> {
    return this.apiHttpClient.get(`/user/returnlist`);
  }

  checkUserExist(email: string): Observable<R> {
    return this.apiHttpClient.post(`/user/exists`, { email: email });
  }

  logout(): Observable<R> {
    return this.apiHttpClient.post(`/user/logout`, {});
  }

}
