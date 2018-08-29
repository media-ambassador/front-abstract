import { Injectable } from '@angular/core';
import { MaMenuItem, MaApiMenuCategoryData, MaApiMenuService } from '../../modules/api-module/api-menu';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

@Injectable()
export class MaMenuService {
  protected menuData$ = new ReplaySubject<MaMenuItem[]>(1);
  protected menuData: MaMenuItem[];

  constructor(protected apiMenuService: MaApiMenuService) { }

  loadMenu() {
    this.apiMenuService.getMenuCategories().subscribe(response => {
      if (response.action_status) {
        this.menuData = this.parseMenuModel(response.data);
        this.menuData$.next(this.menuData);
      } else {
        this.menuData$.next(null);
      }
    });
  }

  getMenuData(): MaMenuItem[] {
    return this.menuData;
  }

  watchMenuData(): Observable<MaMenuItem[]> {
    return this.menuData$.asObservable();
  }

  /** Parse to correct menu model structure */
  protected parseMenuModel(menuData: MaApiMenuCategoryData[]): MaMenuItem[] {
    const items: any[] = [];
    let parsedItem: MaMenuItem = null;

    const menuRoots = _.filter(menuData, item => {
      return item.category_is_root === 1;
    });

    if (!menuRoots) {
      return;
    }

    _.forEach(menuRoots, (rootItem, rootIndex) => {
      parsedItem = this.mapMenuItemModel(rootItem);
      items.push(parsedItem);

      _.forEach(rootItem.category_children, (childItem, childIndex) => {
        const menuItem = _.find(menuData, el => {
          // tslint:disable-next-line:radix
          return el.category_id === parseInt(childItem.category_child_id);
        });

        if (!menuItem) {
          return;
        }

        parsedItem = this.mapMenuItemModel(menuItem);

        if (menuItem.category_children.length >= 0) {
          items[rootIndex].children.push(parsedItem);

          _.forEach(menuItem.category_children, secondChildItem => {
            const childMenuItem = _.find(menuData, el => {
              // tslint:disable-next-line:radix
              return el.category_id === parseInt(secondChildItem.category_child_id);
            });

            if (!childMenuItem) {
              return;
            }

            if (!items[rootIndex].children[childIndex]) {
              items[rootIndex].children[childIndex] = [];
            }

            parsedItem = this.mapMenuItemModel(childMenuItem);
            items[rootIndex].children[childIndex].children.push(parsedItem);

          });
        }
      });
    });

    return items;
  }

  protected mapMenuItemModel(item: any): MaMenuItem {
    return {
      active: false,
      children: [],
      displayName: item.category_name,
      icon: item.category_banner2,
      id: item.category_slug_name,
      name: item.category_name
    };
  }
}
