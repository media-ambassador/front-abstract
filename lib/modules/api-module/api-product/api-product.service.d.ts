import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiProductResponse } from './api-product.model';
export declare class MaApiProductService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getProduct(name: string): Observable<MaApiProductResponse>;
    getProductsWithFlag(flag: string, category?: string, filters?: string): Observable<MaApiProductResponse>;
}
