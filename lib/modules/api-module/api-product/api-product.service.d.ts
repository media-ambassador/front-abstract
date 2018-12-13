import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiProductResponse, MaApiProductAttributeList, MaApiProductData, MaApiProductAttribute, MaApiProductCustomFlag, MaApiProductImage, MaApiProductTemplate, MaApiProductSize, MaApiProductVariation } from './api-product.model';
import { MaApiCategoryResponse, MaApiCategoryData } from '../api-category/api-category.model';
import { MaApiResponse, MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../api-common.model';
import { MaApiShopListResponse, MaApiShopData } from '../api-shop';
export declare class MaApiProductService<PR extends MaApiProductResponse<MaApiBreadcrumbs, MaApiProductData<MaApiProductAttribute, MaApiProductCustomFlag, MaApiProductImage, MaApiProductTemplate, MaApiShopData, MaApiProductSize, MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>>, CR extends MaApiCategoryResponse<MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>, MaApiBreadcrumbs, MaApiCategoryData, MaApiProductData<MaApiProductAttribute, MaApiProductCustomFlag, MaApiProductImage, MaApiProductTemplate, MaApiShopData, MaApiProductSize, MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>>, SL extends MaApiShopListResponse<MaApiShopData>, AR extends MaApiProductAttributeList<MaApiProductAttribute>, R extends MaApiResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getProduct(name: string): Observable<PR>;
    getProductsWithFlag(flag: string, category?: string, filters?: string): Observable<PR>;
    getProductsById(ids: string[]): Observable<CR>;
    getProductAttributes(variantId: number): Observable<AR>;
    setProductAvailabilityNotification(variation_id: string, email: string): Observable<R>;
    getProductAvailabilitySalons(variation_id: string): Observable<SL>;
}
