import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiAnnouncementsResponseData, MaApiAnnouncementsItem } from './api-announcements.model';
export declare class MaApiAnnouncementsService<R extends MaApiAnnouncementsResponseData<MaApiAnnouncementsItem>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getAnnouncementsData(): Observable<R>;
}
