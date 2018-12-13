import { Injectable } from '@angular/core';
import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiResponse } from '../api-common.model';
import { MaApiContactForm } from './api-contact.model';

@Injectable()
export class MaApiContactService<R extends MaApiResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) {}

  sendContactForm(contactData: MaApiContactForm): Observable<R> {
    return this.apiHttpClient.post('/contact/createmsg', contactData);
  }
}
