import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiMenuCategories } from './api-menu.model';
export declare class MaApiMenuService {
    protected apiHttpClient: MaApiHttpClient;
    private baseUrl;
    constructor(apiHttpClient: MaApiHttpClient);
    getMenuCategories(): Observable<MaApiMenuCategories>;
}
