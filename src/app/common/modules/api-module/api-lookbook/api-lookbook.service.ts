import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiLookBookResponse } from './api-lookbook.model';

@Injectable()
export class MaApiLookBookService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getLookBook(): Observable<MaApiLookBookResponse> {
    return this.apiHttpClient.get(`/lookbook/list`);
  }

  getLookBookBySlug(slug: string): Observable<MaApiLookBookResponse> {
    return this.apiHttpClient.get(`/lookbook/${slug}`);
  }
}
