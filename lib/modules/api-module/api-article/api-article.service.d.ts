import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiArticleCategoriesResponse, MaApiArticleTagsResponse, MaApiDynamicArticleCategoriesResponse, MaApiDynamicArticleTagsResponse, MaApiArticleCategoryData, MaApiDynamicArticleTagData, MaApiDynamicArticleTagContent, MaApiDynamicArticleLayoutType } from './api-article.model';
import { MaApiSeo } from '../api-meta';
export declare class MaApiArticleService<CR extends MaApiArticleCategoriesResponse<MaApiArticleCategoryData<MaApiSeo>>, TR extends MaApiArticleTagsResponse<MaApiArticleCategoryData<MaApiSeo>>, DCR extends MaApiDynamicArticleCategoriesResponse<MaApiArticleCategoryData<MaApiSeo>>, DTR extends MaApiDynamicArticleTagsResponse<MaApiDynamicArticleTagData<MaApiDynamicArticleTagContent<MaApiDynamicArticleLayoutType>, MaApiArticleCategoryData<MaApiSeo>>>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getArticlesByCategory(categories: string[]): Observable<CR>;
    getArticlesByTag(tags: string[]): Observable<TR>;
    getDynamicArticlesByCategory(categories: string[]): Observable<DCR>;
    getDynamicArticlesByTag(tags: string[]): Observable<DTR>;
}
