import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiBrandsResponse, MaApiBrandData } from './api-brands.model';
export declare class MaApiBrandsService<BR extends MaApiBrandsResponse<MaApiBrandData>> {
    protected apiHttp: MaApiHttpClient;
    constructor(apiHttp: MaApiHttpClient);
    getList(category?: string): Observable<BR>;
}
