import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse, MaApiPriceCurrency, MaApiPriceDetails, MaApiPriceInfo } from '../api-common.model';
import { MaApiUserAuthorizeData, MaApiUserAuthorizeResponse, MaApiUserRegisterData, MaApiUserRegisterResponse, MaApiUserTokenResponse, MaApiUserChangePasswordData, MaApiUserOrderListResponse, MaApiUserRemindData, MaApiFbAuthorizeData, MaApiFbAuthorizeResponse, MaApiUserAddressResponse, MaApiUserAuthorizeResponseData } from './api-user.model';
import { MaApiOrderListData, MaApiOrderListItem, MaApiOrderStatus } from '../api-order';
import { MaApiCartPrice, MaApiCartPriceInfo, MaApiCartProductAttribute, MaApiDeliveryOption, MaApiPaymentOption } from '../api-cart';
import { MaApiProductDiscount, MaApiProductPrice } from '../api-product';
import { MaApiAddressData, MaApiAddressType, MaApiInvoiceData } from '../api-address';
import { MaApiParcelShopData, MaApiDeliveryParcelData } from '../api-cart/api-cart.model';
export declare class MaApiUserService<UAD extends MaApiUserAuthorizeData, UAR extends MaApiUserAuthorizeResponse<MaApiUserAuthorizeResponseData>, FAD extends MaApiFbAuthorizeData, FAR extends MaApiFbAuthorizeResponse, URD extends MaApiUserRegisterData, URR extends MaApiUserRegisterResponse, UOR extends MaApiUserOrderListResponse<MaApiOrderListData<MaApiPriceCurrency, MaApiPriceDetails<MaApiPriceCurrency>, MaApiOrderListItem<MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>, MaApiProductDiscount<MaApiPriceDetails<MaApiPriceCurrency>>, MaApiCartProductAttribute>, MaApiAddressData<MaApiAddressType>, MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>, MaApiPaymentOption, MaApiOrderStatus, MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>>>, UADR extends MaApiUserAddressResponse<MaApiAddressData<MaApiAddressType>, MaApiInvoiceData>, UPD extends MaApiUserChangePasswordData, UTR extends MaApiUserTokenResponse<MaApiUserAuthorizeResponseData>, URED extends MaApiUserRemindData, R extends MaApiResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    authorize(authData: UAD): Observable<UAR>;
    fbAuthorize(fbAuthData: FAD): Observable<FAR>;
    register(registerData: URD): Observable<URR>;
    getAddressList(): Observable<UADR>;
    changePassword(changePasswordData: UPD): Observable<R>;
    getOrderList(): Observable<UOR>;
    token(clear?: boolean): Observable<UTR>;
    remind(remindData: URED): Observable<R>;
    getReturnsList(): Observable<UOR>;
    checkUserExist(email: string): Observable<R>;
    logout(): Observable<R>;
}
