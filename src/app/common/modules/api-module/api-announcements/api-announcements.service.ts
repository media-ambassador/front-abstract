import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiAnnouncementsResponseData,
  MaApiAnnouncementsItem
} from './api-announcements.model';

@Injectable()
export class MaApiAnnouncementsService<R extends MaApiAnnouncementsResponseData<MaApiAnnouncementsItem>> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getAnnouncementsData(): Observable<R> {
    return this.apiHttpClient.get(`/announcements`);
  }
}
