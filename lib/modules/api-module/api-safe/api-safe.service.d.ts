import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiSafeCreateResponse } from './api-safe.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiSetItemResponse, MaApiSetItemData, MaApiCartListResponse } from '../api-cart/api-cart.model';
export declare class MaApiSafeService<CR extends MaApiCartListResponse<any>, IR extends MaApiSetItemResponse<any>, SR extends MaApiSafeCreateResponse, R extends MaApiResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getList(): Observable<CR>;
    setItem(setItemData: MaApiSetItemData): Observable<IR>;
    clear(): Observable<R>;
    create(): Observable<SR>;
    addAllToCart(removeAll?: boolean): Observable<R>;
}
