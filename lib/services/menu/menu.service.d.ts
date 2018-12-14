import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { MaMenuItem, MaApiMenuCategoryData, MaApiMenuService, MaApiMenuCategories } from '../../modules/api-module/api-menu';
export declare class MaMenuService<MI extends MaMenuItem<any>, MC extends MaApiMenuCategoryData<any>> {
    protected apiMenuService: MaApiMenuService<MaApiMenuCategories<any>>;
    protected menuData$: ReplaySubject<MI[]>;
    protected menuData: MI[];
    constructor(apiMenuService: MaApiMenuService<MaApiMenuCategories<any>>);
    loadMenu(rootLevel?: number, deepLevel?: number): void;
    protected parseMenuModel(menuData: MC[], rootLevel?: number, deepLevel?: number): MI[];
    protected buildMenuTree(menuData: MC[], items: MI[], parentId?: number, level?: number): void;
    protected mapMenuItemModel(item: MC): MI;
    getMenuData(): MI[];
    watchMenuData(): Observable<MI[]>;
}
