import { Dictionary } from 'lodash';
import { MaApiPriceDetails, MaApiResponse } from '../api-common.model';
import { MaApiProductPrice, MaApiProductDiscount, MaApiProductVariation, MaApiProductSize } from '../api-product/api-product.model';
import { MaApiAddressData, MaApiInvoiceData } from '../api-address/api-address.model';
export interface MaApiPaymentOption {
    active: boolean;
    code: string;
    name: string;
    image?: string;
}
export interface MaApiPayment {
    options: Dictionary<MaApiPaymentOption>;
    selected: string;
}
export interface MaApiDeliveryOption {
    active: boolean;
    delivery_id: number;
    code: string;
    abbrev?: string;
    cost?: MaApiPriceDetails;
    method?: string;
    method_name?: string;
    name?: string;
    company_name?: string;
    image?: string;
    parcel_shop?: any;
}
export interface MaApiDelivery {
    options: Dictionary<MaApiDeliveryOption>;
    selected: string;
}
export interface MaApiCartProductAttribute {
    attribute_id: string;
    attribute_name: string;
    attribute_value: string;
}
export interface MaApiCartPrice {
    regular: MaApiCartPriceInfo;
    final: MaApiCartPriceInfo;
}
export interface MaApiCartPriceInfo {
    unit: MaApiPriceDetails;
    total: MaApiPriceDetails;
}
export interface MaApiCartProduct {
    product_id: string;
    quantity: number;
    product_code: string;
    display_name: string;
    slug_name: string;
    brand_id: string | number;
    brand_name: string;
    sku: string;
    sizes?: Dictionary<MaApiProductSize>;
    image_file: string;
    attribute_value_list: MaApiCartProductAttribute[];
    price: MaApiCartPrice;
    discount: {
        components: any;
        summary: {
            value: {
                unit: MaApiPriceDetails;
                total: MaApiPriceDetails;
            };
        };
    };
}
export interface MaApiCartListData {
    id: number | string;
    user_id: number | string;
    currency: {
        code: string;
        label: string;
    };
    price: MaApiProductPrice;
    discount: MaApiProductDiscount;
    payment: MaApiPayment;
    delivery: MaApiDelivery;
    spedition_cost: string;
    logistics_minimum: MaApiPriceDetails;
    items: Dictionary<MaApiCartProduct>;
}
export interface MaApiCartListResponse extends MaApiResponse {
    data: MaApiCartListData;
    cart_updated: boolean;
}
export interface MaApiSetItemData {
    product_id: number;
    quantity: number;
    user_id?: number;
}
export interface MaApiSetItemResponse extends MaApiResponse {
    data: {
        currentQuantity?: number;
        units?: number;
        related_products?: MaApiProductVariation[];
    };
}
export interface MaApiSetDeliveryData {
    delivery_id: number;
    parcel_shop?: string;
}
export interface MaApiSetPaymentData {
    payment_type: string;
}
export interface MaApiMakeOrderAddressData {
    billing: MaApiAddressData;
    shipping: MaApiAddressData;
    invoice: MaApiInvoiceData;
}
export interface MaApiMakeOrderData {
    addressesData?: MaApiMakeOrderAddressData;
    special_instruction: string;
}
export interface MaApiMakeOrderResponse extends MaApiResponse {
    data: {
        order_id?: string;
        redirectUrl?: string;
        reload?: boolean;
    };
}
