import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiAnnouncementsResponseData } from './api-announcements.model';
export declare class MaApiAnnouncementsService {
    private apiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getAnnouncementsData(): Observable<MaApiAnnouncementsResponseData>;
}
