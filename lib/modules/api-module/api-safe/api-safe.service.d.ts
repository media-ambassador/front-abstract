import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiSafeCreateResponse } from './api-safe.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiSetItemResponse, MaApiSetItemData, MaApiCartListResponse } from '../api-cart/api-cart.model';
export declare class MaApiSafeService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getList(): Observable<MaApiCartListResponse>;
    setItem(setItemData: MaApiSetItemData): Observable<MaApiSetItemResponse>;
    clear(): Observable<MaApiResponse>;
    create(): Observable<MaApiSafeCreateResponse>;
}
