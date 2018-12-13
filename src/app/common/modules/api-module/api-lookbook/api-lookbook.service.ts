import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiLookBookResponse } from './api-lookbook.model';

@Injectable()
export class MaApiLookBookService<LR extends MaApiLookBookResponse<any>> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getLookBook(): Observable<LR> {
    return this.apiHttpClient.get(`/lookbook/list`);
  }

  getLookBookBySlug(slug: string): Observable<LR> {
    return this.apiHttpClient.get(`/lookbook/${slug}`);
  }
}
