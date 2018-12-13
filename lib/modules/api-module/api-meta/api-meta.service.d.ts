import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiMetaListResponse, MaApiMetaTagResponse, MaApiMetaData } from './api-meta.model';
export declare class MaApiMetaService<LR extends MaApiMetaListResponse<MaApiMetaData>, TR extends MaApiMetaTagResponse<MaApiMetaData>> {
    protected apiHttp: MaApiHttpClient;
    constructor(apiHttp: MaApiHttpClient);
    getList(): Observable<LR>;
    getTag(tag: string): Observable<TR>;
}
