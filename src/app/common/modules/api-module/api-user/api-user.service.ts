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
  MaApiFbAuthorizeResponse
} from './api-user.model';

@Injectable()
export class MaApiUserService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  authorize(authData: MaApiUserAuthorizeData): Observable<MaApiUserAuthorizeResponse> {
    return this.apiHttpClient.post(`/user/authorize`, authData);
  }

  fbAuthorize(fbAuthData: MaApiFbAuthorizeData): Observable<MaApiFbAuthorizeResponse> {
    return this.apiHttpClient.post(`/user/fbauthorize`, fbAuthData);
  }

  register(registerData: MaApiUserRegisterData): Observable<MaApiUserRegisterResponse> {
    return this.apiHttpClient.post(`/user/register`, registerData);
  }

  getAddressList(): Observable<MaApiResponse> {
    return this.apiHttpClient.get(`/user/addresslist`);
  }
  changePassword(changePasswordData: MaApiUserChangePasswordData): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/user/changepassword`, changePasswordData);
  }

  getOrderList(): Observable<MaApiUserOrderListResponse> {
    return this.apiHttpClient.get(`/user/orderlist`);
  }

  token(): Observable<MaApiUserTokenResponse> {
    return this.apiHttpClient.get(`/user/token`);
  }

  remind(remindData: MaApiUserRemindData): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/user/remindpassword`, remindData);
  }

  getReturnsList(): Observable<MaApiUserOrderListResponse> {
    return this.apiHttpClient.get(`/user/returnlist`);
  }
}
