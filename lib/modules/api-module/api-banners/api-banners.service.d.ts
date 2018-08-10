import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiBannersListResponse, MaApiBannersEmissionsListResponse } from './api-banners.model';
export declare class MaApiBannersService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getBannersList(): Observable<MaApiBannersListResponse>;
    getBannersListById(id: string): Observable<MaApiBannersListResponse>;
    getBannersListByPlace(place: string): Observable<MaApiBannersListResponse>;
    getBannersEmissionsList(): Observable<MaApiBannersListResponse>;
    getBannersEmissionsListByTag(tag: string): Observable<MaApiBannersEmissionsListResponse>;
}
