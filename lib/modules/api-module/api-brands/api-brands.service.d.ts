import { Observable } from 'rxjs/Observable';
import { MaApiBrandsResponse } from './api-brands.model';
import { MaApiHttpClient } from '../api-http-client.service';
export declare class MaApiBrandsService<BR extends MaApiBrandsResponse<any>> {
    protected apiHttp: MaApiHttpClient;
    constructor(apiHttp: MaApiHttpClient);
    getList(): Observable<BR>;
}
