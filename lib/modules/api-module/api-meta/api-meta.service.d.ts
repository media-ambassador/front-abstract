import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiMetaListResponse, MaApiMetaTagResponse } from './api-meta.model';
export declare class MaApiMetaService {
    private apiHttp;
    constructor(apiHttp: MaApiHttpClient);
    getList(): Observable<MaApiMetaListResponse>;
    getTag(tag: string): Observable<MaApiMetaTagResponse>;
}
