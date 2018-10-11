import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiNewsletterAddData, MaApiNewsletterAddResponse } from './api-newsletter.model';
export declare class MaApiNewsletterService {
    protected apiHttp: MaApiHttpClient;
    constructor(apiHttp: MaApiHttpClient);
    addFreshMailSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse>;
    addGetResponseSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse>;
    addSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse>;
}
