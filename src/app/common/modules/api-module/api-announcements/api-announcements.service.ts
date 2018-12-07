import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiAnnouncementsResponseData } from './api-announcements.model';

@Injectable()
export class MaApiAnnouncementsService<R extends MaApiAnnouncementsResponseData> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getAnnouncementsData(): Observable<R> {
    return this.apiHttpClient.get(`/announcements`);
  }
}
