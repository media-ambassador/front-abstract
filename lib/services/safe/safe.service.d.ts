import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { MaApiSafeService } from '../../modules/api-module/api-safe/api-safe.service';
import { MaApiSafeCreateResponse } from '../../modules/api-module/api-safe/api-safe.model';
import { MaApiCartListResponse, MaApiSetItemResponse, MaApiCartListData } from '../../modules/api-module/api-cart/api-cart.model';
import { MaAuthService } from '../auth/auth.service';
export declare class MaSafeService {
    private apiSafeService;
    private authService;
    private cookieService;
    private cartSafeListSubject$;
    private cartSafeList;
    constructor(apiSafeService: MaApiSafeService, authService: MaAuthService, cookieService: CookieService);
    init(): Observable<MaApiSafeCreateResponse>;
    refreshCartSafeList(): void;
    watchCartSafeList(): Observable<MaApiCartListResponse>;
    getCartSafeData(): MaApiCartListData;
    isInSafeList(productId: number): boolean;
    addElement(productId: number, quantity?: number): Observable<MaApiSetItemResponse>;
    removeElement(productId: number): Observable<MaApiSetItemResponse>;
    clear(): void;
    reset(): void;
}
