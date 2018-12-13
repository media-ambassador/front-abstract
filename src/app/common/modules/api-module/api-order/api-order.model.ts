import { MaApiResponse, MaApiPriceCurrency, MaApiPriceDetails, MaApiPriceInfo } from '../api-common.model';
import { MaApiCartProductAttribute, MaApiCartPrice, MaApiPaymentOption, MaApiDeliveryOption, MaApiCartPriceInfo, MaApiParcelShopData, MaApiDeliveryParcelData } from '../api-cart/api-cart.model';
import { MaApiProductDiscount, MaApiProductPrice } from '../api-product/api-product.model';
import { MaApiAddressData, MaApiAddressType } from '../api-address/api-address.model';
import { Dictionary } from '../../../models';

export interface MaApiOrderListItem<P extends MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                    D extends MaApiProductDiscount< MaApiPriceDetails<MaApiPriceCurrency>>,
                                    A extends MaApiCartProductAttribute> {
  product_id?: string;
  quantity?: string;
  product_code?: any;
  display_name?: string;
  slug_name?: string;
  brand_id?: string;
  brand_name?: string;
  sku?: string;
  image_file?: string;
  attribute_value_list?: A;
  price?: P;
  discount?: D;
}

export interface MaApiOrderStatus {
  id?: string;
  code?: string;
  name?: string;
}

export interface MaApiOrderListData<PC extends MaApiPriceCurrency,
                                    PD extends MaApiPriceDetails<PC>,
                                    O extends MaApiOrderListItem<MaApiCartPrice<MaApiCartPriceInfo<PD>>,
                                                                 MaApiProductDiscount<PD>,
                                                                 MaApiCartProductAttribute>,
                                    A extends MaApiAddressData<MaApiAddressType>,
                                    D extends MaApiDeliveryOption<PD, MaApiParcelShopData<MaApiDeliveryParcelData>>,
                                    PO extends MaApiPaymentOption,
                                    OS extends MaApiOrderStatus,
                                    PP extends MaApiProductPrice<MaApiPriceInfo<PD>>> {
  created?: number;
  currency?: PC;
  id?: string;
  code?: string;
  discount?: PD;
  identifier?: string;
  items?: Dictionary<O>;
  modified?: boolean;
  payment?: {
    address?: A;
    selected_payment?: PO;
  };
  shipment?: {
    address?: A;
    delivery?: D;
  };
  price?: PP;
  status?: OS;
  user_id?: string;
}

export interface MaApiOrderResponse<T extends MaApiOrderListData<MaApiPriceCurrency,
                                                                 MaApiPriceDetails<MaApiPriceCurrency>,
                                                                 MaApiOrderListItem<MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                                                    MaApiProductDiscount<MaApiPriceDetails<MaApiPriceCurrency>>,
                                                                                    MaApiCartProductAttribute>,
                                                                 MaApiAddressData<MaApiAddressType>,
                                                                 MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>,
                                                                 MaApiPaymentOption,
                                                                 MaApiOrderStatus,
                                                                 MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>>> extends MaApiResponse {
  data: T;
}
