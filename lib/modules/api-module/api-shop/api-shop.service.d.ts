import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiShopListResponse } from './api-shop.model';
export declare class MaApiShopService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getShopList(): Observable<MaApiShopListResponse>;
}
