import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiShopListResponse, MaApiShopData } from './api-shop.model';

@Injectable()
export class MaApiShopService<SR extends MaApiShopListResponse<MaApiShopData>> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getShopList(): Observable<SR> {
    return this.apiHttpClient.get(`/shop/list`);
  }
}
