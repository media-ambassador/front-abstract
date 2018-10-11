import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiNewsletterAddData, MaApiNewsletterAddResponse } from './api-newsletter.model';

@Injectable()
export class MaApiNewsletterService {

  constructor(protected apiHttp: MaApiHttpClient) { }

  addFreshMailSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse> {
    return this.apiHttp.post(`/freshmail/subscriber/add`, data);
  }

  addGetResponseSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse> {
    return this.apiHttp.post(`/getresponse/subscriber/add`, data);
  }

  addSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse> {
    return this.apiHttp.post(`/newsletter/subscriber/add`, data);
  }

}
