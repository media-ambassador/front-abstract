import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiCategoryResponse, MaApiCategoryData } from './api-category.model';
import { MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue, MaApiBreadcrumbs } from './../api-common.model';
import { MaApiProductData, MaApiProductAttribute, MaApiProductCustomFlag, MaApiProductImage, MaApiProductTemplate, MaApiProductSize, MaApiProductVariation } from '../api-product';
import { MaApiShopData } from '../api-shop';
import { MaApiSeo } from '../api-meta';
export declare class MaApiCategoryService<CR extends MaApiCategoryResponse<MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>, MaApiBreadcrumbs, MaApiCategoryData, MaApiProductData<MaApiProductAttribute, MaApiProductCustomFlag, MaApiProductImage, MaApiProductTemplate, MaApiShopData, MaApiProductSize, MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>, MaApiSeo>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getCategory(name: string, filters?: string): Observable<CR>;
}
