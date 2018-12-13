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
export class MaAuthService {
  protected authorized = false;
  protected authorizeSubject$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  protected userData: MaApiUserData = null;
  protected userDataSubject$: ReplaySubject<MaApiUserData> = new ReplaySubject<MaApiUserData>(1);
  protected token: string;

  constructor(protected apiUserService: MaApiUserService<MaApiUserAuthorizeData,
                                                         MaApiUserAuthorizeResponse<any>,
                                                         MaApiFbAuthorizeData,
                                                         MaApiFbAuthorizeResponse,
                                                         MaApiUserRegisterData,
                                                         MaApiUserRegisterResponse,
                                                         MaApiUserOrderListResponse<any>,
                                                         MaApiUserAddressResponse<any, any>,
                                                         MaApiUserChangePasswordData,
                                                         MaApiUserTokenResponse<any>,
                                                         MaApiUserRemindData,
                                                         MaApiResponse>,
              protected cookieService: CookieService) { }

  populate(clear = false): Promise<boolean> {
    if (clear) {
      this.clearData();
    }

    return new Promise<boolean>(resolve => {
      const subscription = this.apiUserService.token(clear).subscribe(response => {
        this.cookieService.set(MaTokenKeyName, response.data.x_jwt_token, 30, '/');
        this.setAuthorized(response.data.is_logged);
        this.setUserData(response.data.user_data);

        subscription.unsubscribe();
        resolve(true);
      });
    });
  }

  protected setUserData(data: MaApiUserAuthorizeResponseData): void {
    this.userData = {
      id: !!data.user_id ? data.user_id : null,
      login: !!data.user_login ? data.user_login : null,
      cartId: !!data.last_cart_id ? data.last_cart_id : null,
      cartSafeId: !!data.last_safe_id ? data.last_safe_id : null,
      firstname: !!data.firstname ? data.firstname : null,
      lastname: !!data.lastname ? data.lastname : null,
      email: !!data.email ? data.email : null,
    };
  }

  authorize(auth: MaApiUserAuthorizeData): Observable<MaApiUserAuthorizeResponse<any>> {
    return this.apiUserService.authorize(auth).pipe(
      tap(response => {
        if (response.action_status) {

          this.setUserData(response.data);
          this.userDataSubject$.next(this.userData);

          if (!!response.data.x_jwt_token) {
            this.token = response.data.x_jwt_token;
            this.cookieService.set(MaTokenKeyName, this.token, 30, '/');
          }

          this.setAuthorized(true);
        }
      })
    );
  }

  fbAuthorize(auth: MaApiFbAuthorizeData): Observable<MaApiFbAuthorizeResponse> {
    return this.apiUserService.fbAuthorize(auth).pipe(
      tap(response => {
        if (response.action_status) {
          this.setUserData(response.data);
          this.userDataSubject$.next(this.userData);

          if (!!response.data.x_jwt_token) {
            this.token = response.data.x_jwt_token;
            this.cookieService.set(MaTokenKeyName, this.token, 30, '/');
          }

          this.setAuthorized(true);
        }
      })
    );
  }

  register(register: MaApiUserRegisterData): Observable<MaApiUserRegisterResponse> {
    return this.apiUserService.register(register).pipe(
      tap(response => {
        if (response.action_status) {

          this.setUserData(response.data as MaApiUserAuthorizeResponseData);
          this.userDataSubject$.next(this.userData);

          this.setAuthorized(true);
        }
      })
    );
  }

  remind(remind: MaApiUserRemindData): Observable<MaApiResponse> {
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

  watchUserData(): Observable<MaApiUserData> {
    return this.userDataSubject$.asObservable();
  }

  getUserData(): MaApiUserData {
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
