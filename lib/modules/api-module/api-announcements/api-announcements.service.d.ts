import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiAnnouncementsResponseData } from './api-announcements.model';
export declare class MaApiAnnouncementsService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getAnnouncementsData(): Observable<MaApiAnnouncementsResponseData>;
}
