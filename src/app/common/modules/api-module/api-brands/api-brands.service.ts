import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MaApiBrandsResponse } from './api-brands.model';
import { MaApiHttpClient } from '../api-http-client.service';

@Injectable()
export class MaApiBrandsService<BR extends MaApiBrandsResponse> {

  constructor(protected apiHttp: MaApiHttpClient) { }

  getList(): Observable<BR> {
    return this.apiHttp.get(`/brands`);
  }
}
