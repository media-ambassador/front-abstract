import { MaApiResponse, MaApiPriceCurrency, MaApiPriceDetails, MaApiPriceInfo } from '../api-common.model';
import { MaApiCartProductAttribute, MaApiCartPrice, MaApiPaymentOption, MaApiDeliveryOption, MaApiCartPriceInfo, MaApiParcelShopData, MaApiDeliveryParcelData } from '../api-cart/api-cart.model';
import { MaApiProductDiscount, MaApiProductPrice, MaApiProductVariation, MaApiProductAttribute, MaApiProductImage, MaApiProductSize } from '../api-product/api-product.model';
import { MaApiAddressData, MaApiAddressType } from '../api-address/api-address.model';
import { Dictionary } from '../../../models';
import { MaApiShopData } from '../api-shop';

export interface MaOrderProductAttribute {
  id?: string;
  values?: string[];
  displayName?: string;
  name?: string;
}

export interface MaOrderProductImage {
  id?: string;
  src?: string;
}

export interface MaOrderProductModelBrand {
  id?: string;
  created?: string;
  description?: string;
  logo?: string;
  brand_name?: string;
}

export interface MaOrderProductModelCategory {
  c_id?: number;
  categoryName?: string;
  description?: string;
  level?: string;
  left?: string;
  right?: string;
  parents?: string[];
  children?: string[];
}

export interface MaOrderProductModel<OB extends MaOrderProductModelBrand, OC extends MaOrderProductModelCategory> {
  brand_id?: string;
  identifier?: string;
  pStatus?: string;
  pValid?: string;
  id?: string;
  displayName?: string;
  brand?: OB;
  categories?: OC[];
  categories_ids?: {
    id?: string;
    primaryCategory?: string;
  }[];
}

export interface OrderProductData<OA extends MaOrderProductAttribute, OI extends MaApiProductImage, OM extends MaOrderProductModel<
                                                                                                                MaOrderProductModelBrand,
                                                                                                                MaOrderProductModelCategory
                                                                                                               >,
                                  PS extends MaApiProductSize
                                 > {
  attributes?: Dictionary<OA>;
  availability?: string;
  color_photo?: string;
  description?: string;
  displayName?: string;
  id?: string;
  images?: {
    primary?: OI;
    all?: OI[];
  };
  inventory?: {
    units?: number;
  };
  longdescription?: string;
  model?: OM;
  model_id?: string;
  name?: string;
  related_products_ids?: {
    id:  string;
  }[];
  sizes?: Dictionary<PS>;
  sku?: string;
  stock?: string;
  vStatus?: string;
  vValid?: string;
}

export interface MaApiOrderListItem<P extends MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                    D extends MaApiProductDiscount< MaApiPriceDetails<MaApiPriceCurrency>>,
                                    PD extends OrderProductData<MaOrderProductAttribute,
                                                                MaApiProductImage,
                                                                MaOrderProductModel<
                                                                  MaOrderProductModelBrand,
                                                                  MaOrderProductModelCategory
                                                                >,
                                                                MaApiProductSize>
                                    > {
  price?: P;
  discount?: D;
  in_return?: boolean;
  order_id?: string;
  product_data?: PD;
  product_id?: string;
  quantity?: string;
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
                                                                 OrderProductData<MaOrderProductAttribute,
                                                                                  MaApiProductImage,
                                                                                  MaOrderProductModel<
                                                                                    MaOrderProductModelBrand,
                                                                                    MaOrderProductModelCategory
                                                                                  >,
                                                                                  MaApiProductSize>
                                                                >,
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
                                                                                    OrderProductData<MaOrderProductAttribute,
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
                                                                 MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>>> extends MaApiResponse {
  data: T;
}
