import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiArticleCategoriesResponse, MaApiArticleTagsResponse, MaApiDynamicArticleCategoriesResponse, MaApiDynamicArticleTagsResponse } from './api-article.model';
export declare class MaApiArticleService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getArticlesByCategory(categories: string[]): Observable<MaApiArticleCategoriesResponse>;
    getArticlesByTag(tags: string[]): Observable<MaApiArticleTagsResponse>;
    getDynamicArticlesByCategory(categories: string[]): Observable<MaApiDynamicArticleCategoriesResponse>;
    getDynamicArticlesByTag(tags: string[]): Observable<MaApiDynamicArticleTagsResponse>;
}
