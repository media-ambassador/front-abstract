import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiMenuCategories } from './api-menu.model';
export declare class MaApiMenuService {
    private apiHttpClient;
    private baseUrl;
    constructor(apiHttpClient: MaApiHttpClient);
    getMenuCategories(): Observable<MaApiMenuCategories>;
}
