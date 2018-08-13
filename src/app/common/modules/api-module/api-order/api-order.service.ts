import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiOrderResponse } from './api-order.model';

@Injectable()
export class MaApiOrderService {

  constructor(private apiHttpClient: MaApiHttpClient) { }

  getOrder(id: string): Observable<MaApiOrderResponse> {
    return this.apiHttpClient.post(`/order/get`, { id: id });
  }
}
