import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { MaApiUserService } from '../../modules/api-module/api-user/api-user.service';
import {
  MaApiUserAuthorizeData,
  MaApiUserAuthorizeResponse,
  MaApiUserData,
  MaApiUserRegisterData,
  MaApiUserRegisterResponse,
  MaApiUserAuthorizeResponseData,
  MaApiUserRemindData,
  MaApiFbAuthorizeData,
  MaApiFbAuthorizeResponse,
  MaApiUserTokenResponse,
  MaApiUserChangePasswordData,
  MaApiUserAddressResponse,
  MaApiUserOrderListResponse
} from '../../modules/api-module/api-user/api-user.model';
import { MaApiResponse } from '../../modules/api-module';

export const MaTokenKeyName = 'session-token';

@Injectable()
export class MaAuthService<UD extends MaApiUserData,
                           ARD extends MaApiUserAuthorizeResponseData,
                           AD extends MaApiUserAuthorizeData,
                           AR extends MaApiUserAuthorizeResponse<any>,
                           FAD extends MaApiFbAuthorizeData,
                           FAR extends MaApiFbAuthorizeResponse,
                           RD extends MaApiUserRegisterData,
                           RR extends MaApiUserRegisterResponse,
                           URD extends MaApiUserRemindData,
                           R extends MaApiResponse> {

  protected authorized = false;
  protected authorizeSubject$ = new ReplaySubject<boolean>(1);
  protected userData: UD = null;
  protected userDataSubject$ = new ReplaySubject<UD>(1);
  protected versionMismatchSubject$ = new ReplaySubject<boolean>(1);
  protected token: string;

  constructor(protected apiUserService: MaApiUserService<AD,
                                                         AR,
                                                         FAD,
                                                         FAR,
                                                         RD,
                                                         RR,
                                                         MaApiUserOrderListResponse<any>,
                                                         MaApiUserAddressResponse<any, any>,
                                                         MaApiUserChangePasswordData,
                                                         MaApiUserTokenResponse<any>,
                                                         URD,
                                                         R>,
              protected cookieService: CookieService) { }

  populate(clear = false, version: string = null): Promise<boolean> {
    if (clear) {
      this.clearData();
    }

    return new Promise<boolean>(resolve => {
      const subscription = this.apiUserService.token(clear).subscribe(response => {
        this.handleTokenResponse(response, version);
        subscription.unsubscribe();
        resolve(true);
      });
    });
  }

  protected handleTokenResponse(response: MaApiUserTokenResponse<any>, version: string = null) {
    this.handleVersionError(response, version);
    this.cookieService.set('session-token', response.data.x_jwt_token, 30, '/');
    this.setAuthorized(response.data.is_logged);
    this.setUserData(response.data.user_data);
  }

  protected handleVersionError(response: MaApiUserTokenResponse<any>, version: string = null) {
    if (!!response.data.version && !!version && response.data.version !== version) {
      this.versionMismatchSubject$.next(true);
    }
  }

  watchVersionError() {
    return this.versionMismatchSubject$.asObservable();
  }

  protected setUserData(data: ARD): void {
    this.userData = {
      id: !!data.user_id ? data.user_id : null,
      login: !!data.user_login ? data.user_login : null,
      cartId: !!data.last_cart_id ? data.last_cart_id : null,
      cartSafeId: !!data.last_safe_id ? data.last_safe_id : null,
      firstname: !!data.firstname ? data.firstname : null,
      lastname: !!data.lastname ? data.lastname : null,
      email: !!data.email ? data.email : null,
    } as UD;
  }

  authorize(auth: AD): Observable<AR> {
    return this.apiUserService.authorize(auth).pipe(
      tap(response => this.handleAuthorizeResponse(response))
    );
  }

  protected handleAuthorizeResponse(response: AR) {
    if (response.action_status) {

      this.setUserData(response.data);
      this.userDataSubject$.next(this.userData);

      if (!!response.data.x_jwt_token) {
        this.token = response.data.x_jwt_token;
        this.cookieService.set(MaTokenKeyName, this.token, 30, '/');
      }

      this.setAuthorized(true);
    }
  }

  fbAuthorize(auth: FAD): Observable<FAR> {
    return this.apiUserService.fbAuthorize(auth).pipe(
      tap(response => this.handleFbAuthorizeResponse(response))
    );
  }

  protected handleFbAuthorizeResponse(response: FAR) {
    if (response.action_status) {
      this.setUserData(response.data);
      this.userDataSubject$.next(this.userData);

      if (!!response.data.x_jwt_token) {
        this.token = response.data.x_jwt_token;
        this.cookieService.set(MaTokenKeyName, this.token, 30, '/');
      }

      this.setAuthorized(true);
    }
  }

  register(register: RD): Observable<RR> {
    return this.apiUserService.register(register).pipe(
      tap(response => this.handleRegisterResponse(response))
    );
  }

  protected handleRegisterResponse(response: RR) {
    if (response.action_status) {

      this.setUserData(response.data as ARD);
      this.userDataSubject$.next(this.userData);

      this.setAuthorized(true);
    }
  }

  remind(remind: URD): Observable<R> {
    return this.apiUserService.remind(remind);
  }

  protected setAuthorized(auth: boolean) {
    this.authorized = auth;
    this.authorizeSubject$.next(auth);
  }

  watchAuthorized(): Observable<boolean> {
    return this.authorizeSubject$.asObservable();
  }

  isAuthorized(): boolean {
    return this.authorized;
  }

  watchUserData(): Observable<UD> {
    return this.userDataSubject$.asObservable();
  }

  getUserData(): UD {
    return this.userData;
  }

  clearData() {
    this.cookieService.deleteAll('/');
    localStorage.clear();
    sessionStorage.clear();
  }

  logout(): void {
    this.clearData();
    this.apiUserService.logout().subscribe(() => this.populate());
  }

}
