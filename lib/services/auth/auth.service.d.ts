import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { MaApiUserService } from '../../modules/api-module/api-user/api-user.service';
import { MaApiUserAuthorizeData, MaApiUserAuthorizeResponse, MaApiUserData, MaApiUserRegisterData, MaApiUserRegisterResponse, MaApiUserAuthorizeResponseData, MaApiUserRemindData } from '../../modules/api-module/api-user/api-user.model';
import { MaApiResponse } from '../../modules/api-module';
export declare const MaTokenKeyName = "session-token";
export declare class MaAuthService {
    protected apiUserService: MaApiUserService;
    protected cookieService: CookieService;
    protected authorized: boolean;
    protected authorizeSubject$: ReplaySubject<boolean>;
    protected userData: MaApiUserData;
    protected userDataSubject$: ReplaySubject<MaApiUserData>;
    protected token: string;
    constructor(apiUserService: MaApiUserService, cookieService: CookieService);
    populate(): Promise<boolean>;
    protected setUserData(data: MaApiUserAuthorizeResponseData): void;
    authorize(auth: MaApiUserAuthorizeData): Observable<MaApiUserAuthorizeResponse>;
    register(register: MaApiUserRegisterData): Observable<MaApiUserRegisterResponse>;
    remind(remind: MaApiUserRemindData): Observable<MaApiResponse>;
    protected setAuthorized(auth: boolean): void;
    watchAuthorized(): Observable<boolean>;
    isAuthorized(): boolean;
    watchUserData(): Observable<MaApiUserData>;
    getUserData(): MaApiUserData;
    logout(): void;
}
