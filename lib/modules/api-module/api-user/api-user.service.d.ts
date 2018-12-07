import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';
import { MaApiUserAuthorizeData, MaApiUserAuthorizeResponse, MaApiUserRegisterData, MaApiUserRegisterResponse, MaApiUserTokenResponse, MaApiUserChangePasswordData, MaApiUserOrderListResponse, MaApiUserRemindData, MaApiFbAuthorizeData, MaApiFbAuthorizeResponse, MaApiUserAddressResponse } from './api-user.model';
export declare class MaApiUserService<UAD extends MaApiUserAuthorizeData, UAR extends MaApiUserAuthorizeResponse, FAD extends MaApiFbAuthorizeData, FAR extends MaApiFbAuthorizeResponse, URD extends MaApiUserRegisterData, URR extends MaApiUserRegisterResponse, UOR extends MaApiUserOrderListResponse, UADR extends MaApiUserAddressResponse, UPD extends MaApiUserChangePasswordData, UTR extends MaApiUserTokenResponse, URED extends MaApiUserRemindData, R extends MaApiResponse> {
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
