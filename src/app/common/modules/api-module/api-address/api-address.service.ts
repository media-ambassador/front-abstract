import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';
import { MaApiAddressData } from './api-address.model';

@Injectable()
export class MaApiAddressService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  createAddress(data: MaApiAddressData): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/address/create`, JSON.stringify(data));
  }

  updateAddress(data: MaApiAddressData): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/address/update`, JSON.stringify(data));
  }

  deleteAddress(id: string): Observable<MaApiResponse> {
    return this.apiHttpClient.delete(`/address/delete`, { body: { id: id } });
  }
}
