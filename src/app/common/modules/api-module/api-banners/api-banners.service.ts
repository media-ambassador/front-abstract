import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiBannersListResponse, MaApiBannersEmissionsListResponse } from './api-banners.model';

@Injectable()
export class MaApiBannersService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getBannersList(): Observable<MaApiBannersListResponse> {
    return this.apiHttpClient.get(`/banner/list`);
  }

  getBannersListById(id: string): Observable<MaApiBannersListResponse> {
    return this.apiHttpClient.post(`/banner/list`, { id: id });
  }

  getBannersListByPlace(place: string): Observable<MaApiBannersListResponse> {
    return this.apiHttpClient.post(`/banner/list`, { place: place });
  }

  getBannersEmissionsList(): Observable<MaApiBannersListResponse> {
    return this.apiHttpClient.get(`/banner/emissions`);
  }

  getBannersEmissionsListByTag(tag: string): Observable<MaApiBannersEmissionsListResponse> {
    return this.apiHttpClient.post(`/banner/emissions`, { tag: tag });
  }
}
