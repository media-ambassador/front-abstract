import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { MaMenuItem, MaApiMenuCategoryData, MaApiMenuService, MaApiMenuCategories } from '../../modules/api-module/api-menu';
export declare class MaMenuService {
    protected apiMenuService: MaApiMenuService<MaApiMenuCategories<any>>;
    protected menuData$: ReplaySubject<MaMenuItem<any>[]>;
    protected menuData: MaMenuItem<any>[];
    constructor(apiMenuService: MaApiMenuService<MaApiMenuCategories<any>>);
    loadMenu(rootLevel?: number, deepLevel?: number): void;
    protected parseMenuModel(menuData: MaApiMenuCategoryData<any>[], rootLevel?: number, deepLevel?: number): MaMenuItem<any>[];
    protected buildMenuTree(menuData: MaApiMenuCategoryData<any>[], items: MaMenuItem<any>[], parentId?: number, level?: number): void;
    protected mapMenuItemModel(item: MaApiMenuCategoryData<any>): MaMenuItem<any>;
    getMenuData(): MaMenuItem<any>[];
    watchMenuData(): Observable<MaMenuItem<any>[]>;
}
