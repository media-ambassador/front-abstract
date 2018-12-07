import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiMenuCategories } from './api-menu.model';
export declare class MaApiMenuService<MR extends MaApiMenuCategories> {
    protected apiHttpClient: MaApiHttpClient;
    protected baseUrl: string;
    constructor(apiHttpClient: MaApiHttpClient);
    getMenuCategories(): Observable<MR>;
}
