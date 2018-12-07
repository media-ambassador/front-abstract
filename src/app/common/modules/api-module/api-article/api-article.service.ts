import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiArticleCategoriesResponse,
  MaApiArticleTagsResponse,
  MaApiDynamicArticleCategoriesResponse,
  MaApiDynamicArticleTagsResponse
} from './api-article.model';

@Injectable()
export class MaApiArticleService <CR extends MaApiArticleCategoriesResponse,
                                  TR extends MaApiArticleTagsResponse,
                                  DCR extends MaApiDynamicArticleCategoriesResponse,
                                  DTR extends MaApiDynamicArticleTagsResponse> {

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
