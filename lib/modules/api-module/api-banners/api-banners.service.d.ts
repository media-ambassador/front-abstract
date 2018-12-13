import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiBannersListResponse, MaApiBannersEmissionsListResponse, MaApiBannerData, MaApiBannerEmissionList, MaApiBannerEmission } from './api-banners.model';
export declare class MaApiBannersService<BR extends MaApiBannersListResponse<MaApiBannerData>, ER extends MaApiBannersEmissionsListResponse<MaApiBannerEmissionList<MaApiBannerEmission<MaApiBannerData>>>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getBannersList(): Observable<BR>;
    getBannersListById(id: string): Observable<BR>;
    getBannersListByPlace(place: string): Observable<BR>;
    getBannersEmissionsList(): Observable<BR>;
    getBannersEmissionsListByTag(tag: string): Observable<ER>;
}
