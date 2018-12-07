import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiArticleCategoriesResponse, MaApiArticleTagsResponse, MaApiDynamicArticleCategoriesResponse, MaApiDynamicArticleTagsResponse } from './api-article.model';
export declare class MaApiArticleService<CR extends MaApiArticleCategoriesResponse, TR extends MaApiArticleTagsResponse, DCR extends MaApiDynamicArticleCategoriesResponse, DTR extends MaApiDynamicArticleTagsResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getArticlesByCategory(categories: string[]): Observable<CR>;
    getArticlesByTag(tags: string[]): Observable<TR>;
    getDynamicArticlesByCategory(categories: string[]): Observable<DCR>;
    getDynamicArticlesByTag(tags: string[]): Observable<DTR>;
}
