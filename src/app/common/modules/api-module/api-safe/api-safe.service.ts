import { Injectable } from '@angular/core';
import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiSafeCreateResponse } from './api-safe.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiSetItemResponse, MaApiSetItemData, MaApiCartListResponse } from '../api-cart/api-cart.model';

@Injectable()
export class MaApiSafeService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getList(): Observable<MaApiCartListResponse> {
    return this.apiHttpClient.get(`/safe/list`);
  }

  setItem(setItemData: MaApiSetItemData): Observable<MaApiSetItemResponse> {
    return this.apiHttpClient.post(`/safe/setitem`, setItemData);
  }

  clear(): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/safe/clear`, { });
  }

  create(): Observable<MaApiSafeCreateResponse> {
    return this.apiHttpClient.post(`/safe/create`, { });
  }

}
