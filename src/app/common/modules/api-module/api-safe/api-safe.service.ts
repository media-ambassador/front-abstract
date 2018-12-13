import { Injectable } from '@angular/core';
import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiSafeCreateResponse } from './api-safe.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiSetItemResponse, MaApiSetItemData, MaApiCartListResponse } from '../api-cart/api-cart.model';

@Injectable()
export class MaApiSafeService<CR extends MaApiCartListResponse<any>, IR extends MaApiSetItemResponse<any>, SR extends MaApiSafeCreateResponse, R extends MaApiResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getList(): Observable<CR> {
    return this.apiHttpClient.get(`/safe/list`);
  }

  setItem(setItemData: MaApiSetItemData): Observable<IR> {
    return this.apiHttpClient.post(`/safe/setitem`, setItemData);
  }

  clear(): Observable<R> {
    return this.apiHttpClient.post(`/safe/clear`, { });
  }

  create(): Observable<SR> {
    return this.apiHttpClient.post(`/safe/create`, { });
  }

  addAllToCart(removeAll = false): Observable<R> {
    return this.apiHttpClient.post(`/safe/addalltocart`, { removeItems: removeAll });
  }

}
