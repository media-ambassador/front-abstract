import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiBannersListResponse,
  MaApiBannersEmissionsListResponse,
  MaApiBannerData,
  MaApiBannerEmissionList,
  MaApiBannerEmission
} from './api-banners.model';

@Injectable()
export class MaApiBannersService<BR extends MaApiBannersListResponse<MaApiBannerData>,
                                 ER extends MaApiBannersEmissionsListResponse<MaApiBannerEmissionList<MaApiBannerEmission<MaApiBannerData>>>> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getBannersList(): Observable<BR> {
    return this.apiHttpClient.get(`/banner/list`);
  }

  getBannersListById(id: string): Observable<BR> {
    return this.apiHttpClient.post(`/banner/list`, { id: id });
  }

  getBannersListByPlace(place: string): Observable<BR> {
    return this.apiHttpClient.post(`/banner/list`, { place: place });
  }

  getBannersEmissionsList(): Observable<BR> {
    return this.apiHttpClient.get(`/banner/emissions`);
  }

  getBannersEmissionsListByTag(tag: string): Observable<ER> {
    return this.apiHttpClient.post(`/banner/emissions`, { tag: tag });
  }
}
