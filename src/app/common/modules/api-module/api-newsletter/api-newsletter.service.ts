import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiNewsletterAddData, MaApiNewsletterAddResponse } from './api-newsletter.model';

@Injectable()
export class MaApiNewsletterService<ND extends MaApiNewsletterAddData, NR extends MaApiNewsletterAddResponse> {

  constructor(protected apiHttp: MaApiHttpClient) { }

  addFreshMailSubscriber(data: ND): Observable<NR> {
    return this.apiHttp.post(`/freshmail/subscriber/add`, data);
  }

  addGetResponseSubscriber(data: ND): Observable<NR> {
    return this.apiHttp.post(`/getresponse/subscriber/add`, data);
  }

  addSubscriber(data: ND): Observable<NR> {
    return this.apiHttp.post(`/newsletter/subscriber/add`, data);
  }

}
