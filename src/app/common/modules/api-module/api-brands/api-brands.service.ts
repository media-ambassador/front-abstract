import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiBrandsResponse,
  MaApiBrandData
} from './api-brands.model';

@Injectable()
export class MaApiBrandsService<BR extends MaApiBrandsResponse<MaApiBrandData>> {

  constructor(protected apiHttp: MaApiHttpClient) { }

  getList(category = ''): Observable<BR> {
    return this.apiHttp.get('/brands/' + category);
  }
}
