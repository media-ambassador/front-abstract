import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';

@Injectable()
export class MaApiSizeTableService {

  constructor(protected apiHttpClient: MaApiHttpClient) {
  }

  getSizeTableBySlug(slug: string): Observable<MaApiResponse> {
    return this.apiHttpClient.post(`/sizetable`, {value: slug});
  }

}
