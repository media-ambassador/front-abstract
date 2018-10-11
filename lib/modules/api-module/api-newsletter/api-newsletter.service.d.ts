import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiNewsletterAddData, MaApiNewsletterAddResponse } from './api-newsletter.model';
export declare class MaApiNewsletterService {
    private apiHttp;
    constructor(apiHttp: MaApiHttpClient);
    addFreshMailSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse>;
    addGetResponseSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse>;
    addSubscriber(data: MaApiNewsletterAddData): Observable<MaApiNewsletterAddResponse>;
}
