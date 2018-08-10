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
export class MaApiArticleService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getArticlesByCategory(categories: string[]): Observable<MaApiArticleCategoriesResponse> {
    return this.apiHttpClient.get(encodeURI(`/article/?query={"category":${JSON.stringify(categories)}}`));
  }

  getArticlesByTag(tags: string[]): Observable<MaApiArticleTagsResponse> {
    return this.apiHttpClient.get(encodeURI(`/article/?query={"tag":${JSON.stringify(tags)}}`));
  }

  getDynamicArticlesByCategory(categories: string[]): Observable<MaApiDynamicArticleCategoriesResponse> {
    return this.apiHttpClient.get(encodeURI(`/darticle/?query={"category":${JSON.stringify(categories)}}`));
  }

  getDynamicArticlesByTag(tags: string[]): Observable<MaApiDynamicArticleTagsResponse> {
    return this.apiHttpClient.get(encodeURI(`/darticle/?query={"tag":${JSON.stringify(tags)}}`));
  }

}
