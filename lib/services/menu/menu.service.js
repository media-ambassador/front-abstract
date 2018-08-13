"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_menu_1 = require("../../modules/api-module/api-menu");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var _ = require("lodash");
var MaMenuService = /** @class */ (function () {
    function MaMenuService(apiMenuService) {
        this.apiMenuService = apiMenuService;
        this.menuData$ = new ReplaySubject_1.ReplaySubject(1);
    }
    MaMenuService.prototype.loadMenu = function () {
        var _this = this;
        this.apiMenuService.getMenuCategories().subscribe(function (response) {
            if (response.action_status) {
                _this.menuData = _this.parseMenuModel(response.data);
                _this.menuData$.next(_this.menuData);
            }
            else {
                _this.menuData$.next(null);
            }
        });
    };
    MaMenuService.prototype.getMenuData = function () {
        return this.menuData;
    };
    MaMenuService.prototype.watchMenuData = function () {
        return this.menuData$.asObservable();
    };
    /** Parse to correct menu model structure */
    /** Parse to correct menu model structure */
    MaMenuService.prototype.parseMenuModel = /** Parse to correct menu model structure */
    function (menuData) {
        var _this = this;
        var items = [];
        var parsedItem = null;
        var menuRoots = _.filter(menuData, function (item) {
            return item.category_is_root === 1;
        });
        if (!menuRoots) {
            return;
        }
        _.forEach(menuRoots, function (rootItem, rootIndex) {
            parsedItem = _this.mapMenuItemModel(rootItem);
            items.push(parsedItem);
            _.forEach(rootItem.category_children, function (childItem, childIndex) {
                var menuItem = _.find(menuData, function (el) {
                    // tslint:disable-next-line:radix
                    return el.category_id === parseInt(childItem.category_child_id);
                });
                if (!menuItem) {
                    return;
                }
                parsedItem = _this.mapMenuItemModel(menuItem);
                if (menuItem.category_children.length >= 0) {
                    items[rootIndex].children.push(parsedItem);
                    _.forEach(menuItem.category_children, function (secondChildItem) {
                        var childMenuItem = _.find(menuData, function (el) {
                            // tslint:disable-next-line:radix
                            return el.category_id === parseInt(secondChildItem.category_child_id);
                        });
                        if (!childMenuItem) {
                            return;
                        }
                        if (!items[rootIndex].children[childIndex]) {
                            items[rootIndex].children[childIndex] = [];
                        }
                        parsedItem = _this.mapMenuItemModel(childMenuItem);
                        items[rootIndex].children[childIndex].children.push(parsedItem);
                    });
                }
            });
        });
        return items;
    };
    MaMenuService.prototype.mapMenuItemModel = function (item) {
        return {
            active: false,
            children: [],
            displayName: item.category_name,
            icon: item.category_banner2,
            id: item.category_slug_name,
            name: item.category_name
        };
    };
    MaMenuService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaMenuService.ctorParameters = function () { return [
        { type: api_menu_1.MaApiMenuService, },
    ]; };
    return MaMenuService;
}());
exports.MaMenuService = MaMenuService;
//# sourceMappingURL=menu.service.js.map