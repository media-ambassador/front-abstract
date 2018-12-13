import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';
import {
  MaApiUserAuthorizeData,
  MaApiUserAuthorizeResponse,
  MaApiUserRegisterData,
  MaApiUserRegisterResponse,
  MaApiUserTokenResponse,
  MaApiUserChangePasswordData,
  MaApiUserOrderListResponse,
  MaApiUserRemindData,
  MaApiFbAuthorizeData,
  MaApiFbAuthorizeResponse,
  MaApiUserAddressResponse
} from './api-user.model';

@Injectable()
export class MaApiUserService<UAD extends MaApiUserAuthorizeData,
                              UAR extends MaApiUserAuthorizeResponse<any>,
                              FAD extends MaApiFbAuthorizeData,
                              FAR extends MaApiFbAuthorizeResponse,
                              URD extends MaApiUserRegisterData,
                              URR extends MaApiUserRegisterResponse,
                              UOR extends MaApiUserOrderListResponse<any>,
                              UADR extends MaApiUserAddressResponse<any, any>,
                              UPD extends MaApiUserChangePasswordData,
                              UTR extends MaApiUserTokenResponse<any>,
                              URED extends MaApiUserRemindData,
                              R extends MaApiResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  authorize(authData: UAD): Observable<UAR> {
    return this.apiHttpClient.post(`/user/authorize`, authData);
  }

  fbAuthorize(fbAuthData: FAD): Observable<FAR> {
    return this.apiHttpClient.post(`/user/fbauthorize`, fbAuthData);
  }

  register(registerData: URD): Observable<URR> {
    return this.apiHttpClient.post(`/user/register`, registerData);
  }

  getAddressList(): Observable<UADR> {
    return this.apiHttpClient.get(`/user/addresslist`);
  }
  changePassword(changePasswordData: UPD): Observable<R> {
    return this.apiHttpClient.post(`/user/changepassword`, changePasswordData);
  }

  getOrderList(): Observable<UOR> {
    return this.apiHttpClient.get(`/user/orderlist`);
  }

  token(clear = false): Observable<UTR> {
    const clearParam = clear ? '?clear=true' : '';
    return this.apiHttpClient.get(`/user/token${clearParam}`);
  }

  remind(remindData: URED): Observable<R> {
    return this.apiHttpClient.post(`/user/remindpassword`, remindData);
  }

  getReturnsList(): Observable<UOR> {
    return this.apiHttpClient.get(`/user/returnlist`);
  }

  checkUserExist(email: string): Observable<R> {
    return this.apiHttpClient.post(`/user/exists`, { email: email });
  }

  logout(): Observable<R> {
    return this.apiHttpClient.post(`/user/logout`, {});
  }

}
