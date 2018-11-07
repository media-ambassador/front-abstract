import { MaMenuItem, MaApiMenuCategoryData, MaApiMenuService } from '../../modules/api-module/api-menu';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
export declare class MaMenuService {
    protected apiMenuService: MaApiMenuService;
    protected menuData$: ReplaySubject<MaMenuItem[]>;
    protected menuData: MaMenuItem[];
    constructor(apiMenuService: MaApiMenuService);
    loadMenu(rootLevel?: number, deepLevel?: number): void;
    protected parseMenuModel(menuData: MaApiMenuCategoryData[], rootLevel?: number, deepLevel?: number): MaMenuItem[];
    protected buildMenuTree(menuData: MaApiMenuCategoryData[], items: MaMenuItem[], parentId?: number, level?: number): void;
    protected mapMenuItemModel(item: MaApiMenuCategoryData): MaMenuItem;
    getMenuData(): MaMenuItem[];
    watchMenuData(): Observable<MaMenuItem[]>;
}
