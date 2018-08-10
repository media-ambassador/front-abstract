import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaMenuItem, MaApiMenuCategoryData } from './api-menu.model';
import { MaApiResponse } from '../api-common.model';

import * as _ from 'lodash';

@Injectable()
export class MaApiMenuService {
  private baseUrl = `/menu`;

  constructor(private apiHttpClient: MaApiHttpClient) { }

  getMenuCategories(): Observable<MaMenuItem[]> {
    return this.apiHttpClient.get<MaApiResponse>(`${this.baseUrl}/categories`)
      .map(menuData => {
        return this.parseMenuModel(menuData.data);
      });
  }

  /** Parse to correct menu model structure */
  private parseMenuModel(menuData: MaApiMenuCategoryData[]): MaMenuItem[] {
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

  private mapMenuItemModel(item: any): MaMenuItem {
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
