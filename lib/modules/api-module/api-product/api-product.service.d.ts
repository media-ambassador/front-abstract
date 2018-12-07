import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiProductResponse, MaApiProductAttributeList } from './api-product.model';
import { MaApiCategoryResponse } from '../api-category/api-category.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiShopListResponse } from '../api-shop';
export declare class MaApiProductService<PR extends MaApiProductResponse, CR extends MaApiCategoryResponse, SL extends MaApiShopListResponse, AR extends MaApiProductAttributeList, R extends MaApiResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getProduct(name: string): Observable<PR>;
    getProductsWithFlag(flag: string, category?: string, filters?: string): Observable<PR>;
    getProductsById(ids: string[]): Observable<CR>;
    getProductAttributes(variantId: number): Observable<AR>;
    setProductAvailabilityNotification(variation_id: string, email: string): Observable<R>;
    getProductAvailabilitySalons(variation_id: string): Observable<SL>;
}
