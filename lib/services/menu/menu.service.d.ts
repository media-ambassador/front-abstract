import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { MaMenuItem, MaApiMenuCategoryData, MaApiMenuService, MaApiMenuCategories } from '../../modules/api-module/api-menu';
export declare class MaMenuService {
    protected apiMenuService: MaApiMenuService<MaApiMenuCategories>;
    protected menuData$: ReplaySubject<MaMenuItem[]>;
    protected menuData: MaMenuItem[];
    constructor(apiMenuService: MaApiMenuService<MaApiMenuCategories>);
    loadMenu(rootLevel?: number, deepLevel?: number): void;
    protected parseMenuModel(menuData: MaApiMenuCategoryData[], rootLevel?: number, deepLevel?: number): MaMenuItem[];
    protected buildMenuTree(menuData: MaApiMenuCategoryData[], items: MaMenuItem[], parentId?: number, level?: number): void;
    protected mapMenuItemModel(item: MaApiMenuCategoryData): MaMenuItem;
    getMenuData(): MaMenuItem[];
    watchMenuData(): Observable<MaMenuItem[]>;
}
