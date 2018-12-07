import { Dictionary } from 'lodash';
import { MaApiResponse, MaApiPriceCurrency } from '../api-common.model';
import { MaApiCartProductAttribute, MaApiCartPrice, MaApiPaymentOption, MaApiDeliveryOption } from '../api-cart/api-cart.model';
import { MaApiProductDiscount, MaApiProductPrice } from '../api-product/api-product.model';
import { MaApiAddressData } from '../api-address/api-address.model';
export interface MaApiOrderListItem {
    product_id?: string;
    quantity?: string;
    product_code?: any;
    display_name?: string;
    slug_name?: string;
    brand_id?: string;
    brand_name?: string;
    sku?: string;
    image_file?: string;
    attribute_value_list?: MaApiCartProductAttribute;
    price?: MaApiCartPrice;
    discount?: MaApiProductDiscount;
}
export interface MaApiOrderStatus {
    id?: string;
    code?: string;
    name?: string;
}
export interface MaApiOrderListData {
    created?: number;
    currency?: MaApiPriceCurrency;
    id?: string;
    code?: string;
    discount?: MaApiProductDiscount;
    identifier?: string;
    items?: Dictionary<MaApiOrderListItem>;
    modified?: boolean;
    payment?: {
        address?: MaApiAddressData;
        selected_payment?: MaApiPaymentOption;
    };
    shipment?: {
        address?: MaApiAddressData;
        delivery?: MaApiDeliveryOption;
    };
    price?: MaApiProductPrice;
    status?: MaApiOrderStatus;
    user_id?: string;
}
export interface MaApiOrderResponse extends MaApiResponse {
    data: MaApiOrderListData;
}
