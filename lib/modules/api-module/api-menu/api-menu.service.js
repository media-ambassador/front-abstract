"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var _ = require("lodash");
var MaApiMenuService = /** @class */ (function () {
    function MaApiMenuService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
        this.baseUrl = "/menu";
    }
    MaApiMenuService.prototype.getMenuCategories = function () {
        var _this = this;
        return this.apiHttpClient.get(this.baseUrl + "/categories")
            .map(function (menuData) {
            return _this.parseMenuModel(menuData.data);
        });
    };
    /** Parse to correct menu model structure */
    /** Parse to correct menu model structure */
    MaApiMenuService.prototype.parseMenuModel = /** Parse to correct menu model structure */
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
    MaApiMenuService.prototype.mapMenuItemModel = function (item) {
        return {
            active: false,
            children: [],
            displayName: item.category_name,
            icon: item.category_banner2,
            id: item.category_slug_name,
            name: item.category_name
        };
    };
    MaApiMenuService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiMenuService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiMenuService;
}());
exports.MaApiMenuService = MaApiMenuService;
//# sourceMappingURL=api-menu.service.js.map