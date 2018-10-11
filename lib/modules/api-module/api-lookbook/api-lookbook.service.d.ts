import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiLookBookResponse } from './api-lookbook.model';
export declare class MaApiLookBookService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getLookBook(): Observable<MaApiLookBookResponse>;
    getLookBookBySlug(slug: string): Observable<MaApiLookBookResponse>;
}
