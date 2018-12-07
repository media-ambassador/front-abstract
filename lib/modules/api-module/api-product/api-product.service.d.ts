import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiProductResponse } from './api-product.model';
import { MaApiCategoryResponse } from '../api-category/api-category.model';
export declare class MaApiProductService<PR extends MaApiProductResponse, CR extends MaApiCategoryResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getProduct(name: string): Observable<PR>;
    getProductsWithFlag(flag: string, category?: string, filters?: string): Observable<PR>;
    getProductsById(ids: string[]): Observable<CR>;
}
