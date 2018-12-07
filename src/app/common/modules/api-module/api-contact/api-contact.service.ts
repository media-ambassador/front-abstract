import { Injectable } from '@angular/core';
import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiResponse } from '../api-common.model';
import { ApiContactForm } from './api-contact.model';

@Injectable()
export class ApiContactService {

  constructor(private apiHttpClient: MaApiHttpClient) {}

  sendContactForm(contactData: ApiContactForm): Observable<MaApiResponse> {
    return this.apiHttpClient.post('/contact/createmsg', contactData);
  }
}
