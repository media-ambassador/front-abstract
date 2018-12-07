import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';

@Injectable()
export class MaApiSizeTableService<R extends MaApiResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) {
  }

  getSizeTableBySlug(slug: string): Observable<R> {
    return this.apiHttpClient.post(`/sizetable`, {value: slug});
  }

}
