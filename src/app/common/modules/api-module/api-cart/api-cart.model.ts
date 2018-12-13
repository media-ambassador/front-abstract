import { MaApiPriceDetails, MaApiResponse, MaApiPriceCurrency, MaApiPriceInfo } from '../api-common.model';
import { MaApiProductPrice, MaApiProductDiscount, MaApiProductVariation, MaApiProductSize, MaApiProductAttribute, MaApiProductImage } from '../api-product/api-product.model';
import { MaApiAddressData, MaApiInvoiceData, MaApiAddressType } from '../api-address/api-address.model';
import { MaApiShopData } from '../api-shop';
import { Dictionary } from '../../../models';

export interface MaApiPaymentOption {
  active: boolean;
  code: string;
  name: string;
  image?: string;
}

export interface MaApiPayment<T extends MaApiPaymentOption> {
  options: Dictionary<T>;
  selected: string;
}

export interface MaApiDeliveryParcelData {
  lang: string;
  selected: boolean;
  sl_address: string;
  sl_address_description: string;
  sl_address_number: string;
  sl_city: string;
  sl_code: string;
  sl_collection_point: string;
  sl_country: string;
  sl_description: string;
  sl_email: string;
  sl_gps_x: string;
  sl_gps_y: string;
  sl_id: string;
  sl_imagefilename: string;
  sl_imagefilename_mime_type: string;
  sl_link: string;
  sl_name: string;
  sl_name_short: string;
  sl_opening_hours: string;
  sl_phone: string;
  sl_region: string;
  sl_shop_type: string;
  sl_updatedate: string;
  sl_zip: string;
}

export interface MaApiParcelShopData<T extends MaApiDeliveryParcelData> {
  code: string;
  details: T;
}

export interface MaApiDeliveryOption<C extends MaApiPriceDetails<MaApiPriceCurrency>, P extends MaApiParcelShopData<MaApiDeliveryParcelData>> {
  active: boolean;
  delivery_id: number;
  code: string;
  abbrev?: string;
  cost?: C;
  method?: string;
  method_name?: string;
  name?: string;
  company_name?: string;
  image?: string;
  parcel_shop?: P;
}

export interface MaApiDelivery<T extends MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>> {
  options: Dictionary<T>;
  selected: string;
}

export interface MaApiCartProductAttribute {
  attribute_id: string;
  attribute_name: string;
  attribute_value: string;
}

export interface MaApiCartPriceInfo<T extends MaApiPriceDetails<MaApiPriceCurrency>> {
  unit: T;
  total: T;
}

export interface MaApiCartPrice<T extends MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>> {
  regular: T;
  final: T;
}

export interface MaApiCartProduct<T extends MaApiCartProductAttribute,
                                  D extends MaApiPriceDetails<MaApiPriceCurrency>,
                                  P extends MaApiCartPrice<MaApiCartPriceInfo<D>>,
                                  S extends MaApiProductSize> {
  product_id: string;
  quantity: number;
  product_code: string;
  display_name: string;
  category_name: string;
  slug_name: string;
  brand_id: string | number;
  brand_name: string;
  sku: string;
  sizes?: Dictionary<S>;
  image_file: string;
  attribute_value_list: T[];
  price: P;
  discount: {
    components: any;
    summary: {
      value: {
        unit: D;
        total: D;
      }
    }
  };
  price_current: string;
  price_regular: string;
  flag_announcement: boolean;
  available_from: string;
}

export interface MaApiCartListData<P extends MaApiPayment<MaApiPaymentOption>,
                                   PD extends MaApiPriceDetails<MaApiPriceCurrency>,
                                   DPD extends MaApiDeliveryParcelData,
                                   PP extends MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                   DI extends MaApiProductDiscount< MaApiPriceDetails<MaApiPriceCurrency>>,
                                   D extends MaApiDelivery<MaApiDeliveryOption<PD, MaApiParcelShopData<DPD>>>,
                                   C extends MaApiCartProduct<MaApiCartProductAttribute, PD, MaApiCartPrice<MaApiCartPriceInfo<PD>>, MaApiProductSize>> {
  id: number | string;
  user_id: number | string;
  currency: {
    code: string;
    label: string;
 };
 price: PP;
 discount: DI;
 payment: P;
 delivery: D;
 spedition_cost: string;
 logistics_minimum: PD;
 items: Dictionary<C>;
 salons: DPD[];
}

export interface MaApiCartListResponse<T extends MaApiCartListData<MaApiPayment<MaApiPaymentOption>,
                                                                   MaApiPriceDetails<MaApiPriceCurrency>,
                                                                   MaApiDeliveryParcelData,
                                                                   MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                                   MaApiProductDiscount< MaApiPriceDetails<MaApiPriceCurrency>>,
                                                                   MaApiDelivery<MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>>,
                                                                   MaApiCartProduct<MaApiCartProductAttribute,
                                                                   MaApiPriceDetails<MaApiPriceCurrency>,
                                                                   MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>,
                                                                   MaApiProductSize>>> extends MaApiResponse {
  data: T;
  cart_updated: boolean;
}

export interface MaApiSetItemData {
  product_id: number;
  quantity: number;
  user_id?: number;
}

export interface MaApiSetItemResponse<V extends MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>> extends MaApiResponse {
  data: {
    related_products?: V[];
  };
  currentQuantity?: number;
  units?: number;
}

export interface MaApiSetDeliveryData {
  delivery_id: number;
  delivery_parcel_code_preferred?: string;
}

export interface MaApiSetPaymentData {
  payment_type: string;
}

export interface MaApiMakeOrderAddressData<A extends MaApiAddressData<MaApiAddressType>, I extends MaApiInvoiceData> {
  billing: A;
  shipping: A;
  invoice: I;
}

export interface MaApiMakeOrderData<T extends MaApiMakeOrderAddressData<MaApiAddressData<MaApiAddressType>, MaApiInvoiceData>>  {
  addressesData?: T;
  special_instruction: string;
}

export interface MaApiMakeOrderResponse extends MaApiResponse {
  data: {
    order_id?: string;
    redirectUrl?: string;
    reload?: boolean;
    validationErrors?: Dictionary<string>;
  };
}
