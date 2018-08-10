import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaMenuItem } from './api-menu.model';
export declare class MaApiMenuService {
    private apiHttpClient;
    private baseUrl;
    constructor(apiHttpClient: MaApiHttpClient);
    getMenuCategories(): Observable<MaMenuItem[]>;
    /** Parse to correct menu model structure */
    private parseMenuModel(menuData);
    private mapMenuItemModel(item);
}
