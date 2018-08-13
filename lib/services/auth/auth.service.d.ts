import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { MaApiUserService } from '../../modules/api-module/api-user/api-user.service';
import { MaApiUserAuthorizeData, MaApiUserAuthorizeResponse, MaApiUserData, MaApiUserRegisterData, MaApiUserRegisterResponse, MaApiUserRemindData } from '../../modules/api-module/api-user/api-user.model';
import { MaApiResponse } from '../../modules/api-module';
export declare const MaTokenKeyName = "session-token";
export declare class MaAuthService {
    private apiUserService;
    private cookieService;
    private authorized;
    private authorizeSubject$;
    private userData;
    private userDataSubject$;
    private token;
    constructor(apiUserService: MaApiUserService, cookieService: CookieService);
    populate(): Promise<boolean>;
    private setUserData(data);
    authorize(auth: MaApiUserAuthorizeData): Observable<MaApiUserAuthorizeResponse>;
    register(register: MaApiUserRegisterData): Observable<MaApiUserRegisterResponse>;
    remind(remind: MaApiUserRemindData): Observable<MaApiResponse>;
    private setAuthorized(auth);
    watchAuthorized(): Observable<boolean>;
    isAuthorized(): boolean;
    watchUserData(): Observable<MaApiUserData>;
    getUserData(): MaApiUserData;
    logout(): void;
}
