import { MaMenuItem, MaApiMenuService } from '../../modules/api-module/api-menu';
import { Observable } from 'rxjs/Observable';
export declare class MaMenuService {
    protected apiMenuService: MaApiMenuService;
    private menuData$;
    private menuData;
    constructor(apiMenuService: MaApiMenuService);
    loadMenu(): void;
    getMenuData(): MaMenuItem[];
    watchMenuData(): Observable<MaMenuItem[]>;
    /** Parse to correct menu model structure */
    private parseMenuModel(menuData);
    private mapMenuItemModel(item);
}
