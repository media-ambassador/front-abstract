import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';


import {
  MaMenuItem,
  MaApiMenuCategoryData,
  MaApiMenuService,
  MaApiMenuCategories
} from '../../modules/api-module/api-menu';

import * as _ from 'lodash';

@Injectable()
export class MaMenuService {
  protected menuData$ = new ReplaySubject<MaMenuItem[]>(1);
  protected menuData: MaMenuItem[];

  constructor(protected apiMenuService: MaApiMenuService<MaApiMenuCategories>) { }

  loadMenu(rootLevel = 1, deepLevel = 3) {
    this.apiMenuService.getMenuCategories().subscribe(response => {
      if (response.action_status) {
        this.menuData = this.parseMenuModel(response.data, rootLevel, deepLevel);
        this.menuData$.next(this.menuData);
      } else {
        this.menuData$.next(null);
      }
    });
  }

  protected parseMenuModel(menuData: MaApiMenuCategoryData[], rootLevel = 1, deepLevel = 3): MaMenuItem[] {
    if (!menuData) {
      return;
    }

    const items: MaMenuItem[] = [];
    this.buildMenuTree(menuData, items, rootLevel, deepLevel);

    return items;
  }

  protected buildMenuTree(menuData: MaApiMenuCategoryData[], items: MaMenuItem[], parentId = 1, level = 3) {
    menuData.forEach(menuItem => {
      if (menuItem.category_parent_id === parentId && menuItem.category_level <= level) {
        items.push(this.mapMenuItemModel(menuItem));
      }
    });

    items.forEach(item => {
      item.children = [];
      this.buildMenuTree(menuData, item.children, item.category_id, level);
    });
  }

  protected mapMenuItemModel(item: MaApiMenuCategoryData): MaMenuItem {
    return {
      active: false,
      children: [],
      displayName: item.category_name,
      icon: item.category_banner2,
      id: item.category_slug_name,
      name: item.category_name,
      category_id: item.category_id
    };
  }

  getMenuData(): MaMenuItem[] {
    return this.menuData;
  }

  watchMenuData(): Observable<MaMenuItem[]> {
    return this.menuData$.asObservable();
  }
}
