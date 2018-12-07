import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { MaApiSafeService } from '../../modules/api-module/api-safe/api-safe.service';
import { MaApiSafeCreateResponse } from '../../modules/api-module/api-safe/api-safe.model';
import { MaApiCartListResponse, MaApiSetItemResponse, MaApiCartListData } from '../../modules/api-module/api-cart/api-cart.model';
import { MaAuthService } from '../auth/auth.service';
import { MaApiResponse } from '../../modules/api-module';
export declare class MaSafeService {
    protected apiSafeService: MaApiSafeService<MaApiCartListResponse, MaApiSetItemResponse, MaApiSafeCreateResponse, MaApiResponse>;
    protected authService: MaAuthService;
    protected cartSafeListSubject$: ReplaySubject<MaApiCartListResponse>;
    protected cartSafeList: MaApiCartListResponse;
    constructor(apiSafeService: MaApiSafeService<MaApiCartListResponse, MaApiSetItemResponse, MaApiSafeCreateResponse, MaApiResponse>, authService: MaAuthService);
    init(): Observable<MaApiSafeCreateResponse>;
    refreshCartSafeList(): void;
    watchCartSafeList(): Observable<MaApiCartListResponse>;
    getCartSafeData(): MaApiCartListData;
    isInSafeList(productId: number): boolean;
    addElement(productId: number, quantity?: number): Observable<MaApiSetItemResponse>;
    addAllToCart(removeAll?: boolean): Observable<MaApiResponse>;
    removeElement(productId: number): Observable<MaApiSetItemResponse>;
    changeQuantity(productId: number, quantity: number): Observable<MaApiSetItemResponse>;
    changeSize(oldProductId: number, newProductId: number, quantity: number): Observable<MaApiSetItemResponse>;
    clear(): void;
    reset(): void;
}
