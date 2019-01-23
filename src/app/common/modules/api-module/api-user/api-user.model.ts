import { MaApiResponse, MaApiPriceCurrency, MaApiPriceDetails, MaApiPriceInfo } from '../api-common.model';
import { MaApiAddressData, MaApiInvoiceData, MaApiAddressType } from '../api-address/api-address.model';
import { MaApiCartPrice, MaApiCartPriceInfo, MaApiDeliveryOption } from '../api-cart';
import { MaApiProductDiscount, MaApiProductPrice, MaApiProductSize } from '../api-product';
import { MaApiParcelShopData, MaApiDeliveryParcelData, MaApiPaymentOption } from '../api-cart/api-cart.model';
import {
  MaApiOrderListData,
  MaApiOrderListItem,
  MaApiOrderStatus,
  MaOrderProductData,
  MaOrderProductAttribute,
  MaOrderProductModel,
  MaOrderProductModelBrand,
  MaOrderProductModelCategory,
  MaOrderProductImage
} from '../api-order/api-order.model';
import { Dictionary } from '../../../models';

export interface MaApiUserAuthorizeData {
  login?: string;
  password?: string;
}

export interface MaApiUserAuthorizeResponseData {
  user_id?: string;
  user_login?: string;
  last_cart_id?: string;
  last_safe_id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  company?: any;
  status?: string;
  created_date?: number;
  vip?: boolean;
  has_discount?: any;
  discount_percentage?: any;
  x_jwt_token?: string;
}

export interface MaApiUserAuthorizeResponse<T extends MaApiUserAuthorizeResponseData> extends MaApiResponse {
  data: T;
}

export interface MaApiFbAuthorizeData {
  fbAccessToken?: string;
  fbId?: string;
}

export interface MaApiFbAuthorizeResponse extends MaApiResponse {
  data: any;
}

export interface MaApiUserData {
  id?: string;
  login?: string;
  cartId?: string;
  cartSafeId?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  company?: any;
  status?: string;
  createdDate?: number;
  vip?: boolean;
  hasDiscount?: any;
  discountPercentage?: any;
}

export interface MaApiUserRegisterData {
  email?: string;
  password?: string;
  password_confirm?: string;
}

export interface MaApiUserRemindData {
  email?: string;
}

export interface MaApiUserRegisterResponse extends MaApiResponse {
  data: {
    user_id?: string;
    user_login?: string;
    validationErrors?: Dictionary<string>;
  };
}

export interface MaApiUserTokenResponse<T extends MaApiUserAuthorizeResponseData> extends MaApiResponse  {
  data: {
    x_jwt_token?: string;
    is_logged?: boolean;
    user_data: T;
  };
}

export interface MaApiUserAddressResponse<AD extends MaApiAddressData<MaApiAddressType>, ID extends MaApiInvoiceData> extends MaApiResponse {
  data: {
    billing?: AD[];
    shipping?: AD[];
    invoice?: ID[];
  };
}

export interface MaApiUserChangePasswordData {
  current_password?: string;
  password?: string;
  password_confirm?: string;
}

export interface MaApiUserOrderListResponse<OL extends MaApiOrderListData<MaApiPriceCurrency,
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
                                            > extends MaApiResponse {
  data: OL[];
}

