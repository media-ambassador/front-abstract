import { MaMenuItem, MaApiMenuCategoryData, MaApiMenuService } from '../../modules/api-module/api-menu';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
export declare class MaMenuService {
    protected apiMenuService: MaApiMenuService;
    protected menuData$: ReplaySubject<MaMenuItem[]>;
    protected menuData: MaMenuItem[];
    constructor(apiMenuService: MaApiMenuService);
    loadMenu(): void;
    getMenuData(): MaMenuItem[];
    watchMenuData(): Observable<MaMenuItem[]>;
    /** Parse to correct menu model structure */
    protected parseMenuModel(menuData: MaApiMenuCategoryData[]): MaMenuItem[];
    protected mapMenuItemModel(item: any): MaMenuItem;
}
