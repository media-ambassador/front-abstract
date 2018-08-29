import { Dictionary } from 'lodash';
import { MaApiResponse } from '../api-common.model';
import { MaApiAddressData, MaApiInvoiceData } from '../api-address/api-address.model';
import { MaApiOrderListData } from '../api-order/api-order.model';
export interface MaApiUserAuthorizeData {
    login: string;
    password: string;
}
export interface MaApiUserAuthorizeResponseData {
    user_id: string;
    user_login: string;
    last_cart_id: string;
    last_safe_id: string;
    firstname: string;
    lastname: string;
    email: string;
    company: any;
    status: string;
    created_date: number;
    vip: boolean;
    has_discount: any;
    discount_percentage: any;
    x_jwt_token: string;
}
export interface MaApiUserAuthorizeResponse extends MaApiResponse {
    data: MaApiUserAuthorizeResponseData;
}
export interface MaApiFbAuthorizeData {
    fbAccessToken: string;
    fbId: string;
}
export interface MaApiFbAuthorizeResponse extends MaApiResponse {
    data: any;
}
export interface MaApiUserData {
    id: string;
    login: string;
    cartId?: string;
    cartSafeId?: string;
    firstname?: string;
    lastname?: string;
    email: string;
    company?: any;
    status?: string;
    createdDate?: number;
    vip?: boolean;
    hasDiscount?: any;
    discountPercentage?: any;
}
export interface MaApiUserRegisterData {
    email: string;
    password: string;
    password_confirm: string;
}
export interface MaApiUserRemindData {
    email: string;
}
export interface MaApiUserRegisterResponse extends MaApiResponse {
    data: {
        user_id?: string;
        user_login?: string;
        validationErrors?: Dictionary<string>;
    };
}
export interface MaApiUserTokenResponse extends MaApiResponse {
    data: {
        x_jwt_token: string;
        is_logged: boolean;
        user_data?: MaApiUserAuthorizeResponseData;
    };
}
export interface MaApiUserAddressResponseData extends MaApiResponse {
    data: {
        billing: MaApiAddressData[];
        shipping: MaApiAddressData[];
        invoice: MaApiInvoiceData[];
    };
}
export interface MaApiUserChangePasswordData {
    current_password: string;
    password: string;
    password_confirm: string;
}
export interface MaApiUserOrderListResponse extends MaApiResponse {
    data: MaApiOrderListData[];
}
