import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { MaApiSafeService } from '../../modules/api-module/api-safe/api-safe.service';
import { MaApiSafeCreateResponse } from '../../modules/api-module/api-safe/api-safe.model';
import { MaApiCartListResponse, MaApiSetItemData, MaApiSetItemResponse, MaApiCartListData } from '../../modules/api-module/api-cart/api-cart.model';
import { MaAuthService } from '../auth/auth.service';
import { MaApiResponse } from '../../modules/api-module';
import { MaApiProductVariation, MaApiProductAttribute, MaApiProductImage } from '../../modules/api-module/api-product/api-product.model';
import { MaApiShopData } from '../../modules/api-module/api-shop';
export declare class MaSafeService<CR extends MaApiCartListResponse<any>, IR extends MaApiSetItemResponse<MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>, ID extends MaApiSetItemData, SCR extends MaApiSafeCreateResponse, CL extends MaApiCartListData<any, any, any, any, any, any, any>, R extends MaApiResponse> {
    protected apiSafeService: MaApiSafeService<CR, IR, SCR, R>;
    protected authService: MaAuthService<any, any, any, any, any, any, any, any, any, any>;
    protected cartSafeListSubject$: ReplaySubject<CR>;
    protected cartSafeList: CR;
    constructor(apiSafeService: MaApiSafeService<CR, IR, SCR, R>, authService: MaAuthService<any, any, any, any, any, any, any, any, any, any>);
    init(): Observable<SCR>;
    refreshCartSafeList(): void;
    watchCartSafeList(): Observable<CR>;
    getCartSafeData(): CL;
    isInSafeList(productId: number): boolean;
    addElement(productId: number, quantity?: number): Observable<IR>;
    addAllToCart(removeAll?: boolean): Observable<R>;
    removeElement(productId: number): Observable<IR>;
    changeQuantity(productId: number, quantity: number): Observable<IR>;
    changeSize(oldProductId: number, newProductId: number, quantity: number): Observable<IR>;
    clear(): void;
    reset(): void;
}
