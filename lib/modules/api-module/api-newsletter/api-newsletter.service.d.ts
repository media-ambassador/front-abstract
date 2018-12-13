import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiNewsletterAddData, MaApiNewsletterAddResponse } from './api-newsletter.model';
export declare class MaApiNewsletterService<ND extends MaApiNewsletterAddData, NR extends MaApiNewsletterAddResponse> {
    protected apiHttp: MaApiHttpClient;
    constructor(apiHttp: MaApiHttpClient);
    addFreshMailSubscriber(data: ND): Observable<NR>;
    addGetResponseSubscriber(data: ND): Observable<NR>;
    addSubscriber(data: ND): Observable<NR>;
}
