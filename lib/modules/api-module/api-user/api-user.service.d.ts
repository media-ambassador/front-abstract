import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';
import { MaApiUserAuthorizeData, MaApiUserAuthorizeResponse, MaApiUserRegisterData, MaApiUserRegisterResponse, MaApiUserTokenResponse, MaApiUserChangePasswordData, MaApiUserOrderListResponse, MaApiUserRemindData } from './api-user.model';
export declare class MaApiUserService {
    private apiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    authorize(authData: MaApiUserAuthorizeData): Observable<MaApiUserAuthorizeResponse>;
    register(registerData: MaApiUserRegisterData): Observable<MaApiUserRegisterResponse>;
    getAddressList(): Observable<MaApiResponse>;
    changePassword(changePasswordData: MaApiUserChangePasswordData): Observable<MaApiResponse>;
    getOrderList(): Observable<MaApiUserOrderListResponse>;
    token(): Observable<MaApiUserTokenResponse>;
    remind(remindData: MaApiUserRemindData): Observable<MaApiResponse>;
    getReturnsList(): Observable<MaApiUserOrderListResponse>;
}
