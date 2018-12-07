import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiResponse } from '../api-common.model';
import { ApiContactForm } from './api-contact.model';
export declare class ApiContactService {
    private apiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    sendContactForm(contactData: ApiContactForm): Observable<MaApiResponse>;
}
