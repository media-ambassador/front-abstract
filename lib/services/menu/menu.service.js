"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var api_menu_1 = require("../../modules/api-module/api-menu");
var MaMenuService = /** @class */ (function () {
    function MaMenuService(apiMenuService) {
        this.apiMenuService = apiMenuService;
        this.menuData$ = new ReplaySubject_1.ReplaySubject(1);
    }
    MaMenuService.prototype.loadMenu = function (rootLevel, deepLevel) {
        var _this = this;
        if (rootLevel === void 0) { rootLevel = 1; }
        if (deepLevel === void 0) { deepLevel = 3; }
        this.apiMenuService.getMenuCategories().subscribe(function (response) {
            if (response.action_status) {
                _this.menuData = _this.parseMenuModel(response.data, rootLevel, deepLevel);
                _this.menuData$.next(_this.menuData);
            }
            else {
                _this.menuData$.next(null);
            }
        });
    };
    MaMenuService.prototype.parseMenuModel = function (menuData, rootLevel, deepLevel) {
        if (rootLevel === void 0) { rootLevel = 1; }
        if (deepLevel === void 0) { deepLevel = 3; }
        if (!menuData) {
            return;
        }
        var items = [];
        this.buildMenuTree(menuData, items, rootLevel, deepLevel);
        return items;
    };
    MaMenuService.prototype.buildMenuTree = function (menuData, items, parentId, level) {
        var _this = this;
        if (parentId === void 0) { parentId = 1; }
        if (level === void 0) { level = 3; }
        menuData.forEach(function (menuItem) {
            if (menuItem.category_parent_id === parentId && menuItem.category_level <= level) {
                items.push(_this.mapMenuItemModel(menuItem));
            }
        });
        items.forEach(function (item) {
            item.children = [];
            _this.buildMenuTree(menuData, item.children, item.category_id, level);
        });
    };
    MaMenuService.prototype.mapMenuItemModel = function (item) {
        return {
            active: false,
            children: [],
            displayName: item.category_name,
            icon: item.category_banner2,
            id: item.category_slug_name,
            name: item.category_name,
            category_id: item.category_id
        };
    };
    MaMenuService.prototype.getMenuData = function () {
        return this.menuData;
    };
    MaMenuService.prototype.watchMenuData = function () {
        return this.menuData$.asObservable();
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