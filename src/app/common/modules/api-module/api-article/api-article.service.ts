import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiArticleCategoriesResponse,
  MaApiArticleTagsResponse,
  MaApiDynamicArticleCategoriesResponse,
  MaApiDynamicArticleTagsResponse,
  MaApiArticleCategoryData,
  MaApiDynamicArticleTagData,
  MaApiDynamicArticleTagContent,
  MaApiDynamicArticleLayoutType
} from './api-article.model';
import { MaApiSeo } from '../api-meta';

@Injectable()
export class MaApiArticleService <CR extends MaApiArticleCategoriesResponse<MaApiArticleCategoryData<MaApiSeo>>,
                                  TR extends MaApiArticleTagsResponse<MaApiArticleCategoryData<MaApiSeo>>,
                                  DCR extends MaApiDynamicArticleCategoriesResponse<MaApiArticleCategoryData<MaApiSeo>>,
                                  DTR extends MaApiDynamicArticleTagsResponse<MaApiDynamicArticleTagData<MaApiDynamicArticleTagContent<MaApiDynamicArticleLayoutType>,
                                              MaApiArticleCategoryData<MaApiSeo>>>> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getArticlesByCategory(categories: string[]): Observable<CR> {
    return this.apiHttpClient.get(encodeURI(`/article/?query={"category":${JSON.stringify(categories)}}`));
  }

  getArticlesByTag(tags: string[]): Observable<TR> {
    return this.apiHttpClient.get(encodeURI(`/article/?query={"tag":${JSON.stringify(tags)}}`));
  }

  getDynamicArticlesByCategory(categories: string[]): Observable<DCR> {
    return this.apiHttpClient.get(encodeURI(`/darticle/?query={"category":${JSON.stringify(categories)}}`));
  }

  getDynamicArticlesByTag(tags: string[]): Observable<DTR> {
    return this.apiHttpClient.get(encodeURI(`/darticle/?query={"tag":${JSON.stringify(tags)}}`));
  }

}
