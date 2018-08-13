import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiShopListResponse } from './api-shop.model';

@Injectable()
export class MaApiShopService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getShopList(): Observable<MaApiShopListResponse> {
    return this.apiHttpClient.get(`/shop/list`);
  }
}
