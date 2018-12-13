import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiMetaListResponse,
  MaApiMetaTagResponse,
  MaApiMetaData
} from './api-meta.model';

@Injectable()
export class MaApiMetaService<LR extends MaApiMetaListResponse<MaApiMetaData>, TR extends MaApiMetaTagResponse<MaApiMetaData>> {

  constructor(protected apiHttp: MaApiHttpClient) { }

  getList(): Observable<LR> {
    return this.apiHttp.get(`/meta/list`);
  }

  getTag(tag: string): Observable<TR> {
    return this.apiHttp.post(`/meta/list`, { tag: tag });
  }

}
