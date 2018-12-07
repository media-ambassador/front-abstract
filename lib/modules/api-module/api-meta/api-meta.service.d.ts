import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiMetaListResponse, MaApiMetaTagResponse } from './api-meta.model';
export declare class MaApiMetaService<LR extends MaApiMetaListResponse, TR extends MaApiMetaTagResponse> {
    protected apiHttp: MaApiHttpClient;
    constructor(apiHttp: MaApiHttpClient);
    getList(): Observable<LR>;
    getTag(tag: string): Observable<TR>;
}
