import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiShopListResponse } from './api-shop.model';
export declare class MaApiShopService {
    private apiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getShopList(): Observable<MaApiShopListResponse>;
}
