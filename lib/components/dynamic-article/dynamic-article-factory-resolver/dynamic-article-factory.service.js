"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaDynamicArticleFactoryService = /** @class */ (function () {
    function MaDynamicArticleFactoryService() {
        this.factoryMap = new Map();
    }
    MaDynamicArticleFactoryService.prototype.registerFactory = function (componentName, componentFactory) {
        this.factoryMap.set(componentName, componentFactory);
    };
    MaDynamicArticleFactoryService.prototype.hasFactory = function (componentName) {
        return this.factoryMap.has(componentName);
    };
    MaDynamicArticleFactoryService.prototype.resolveComponentFactory = function (componentName) {
        if (!this.factoryMap.has(componentName)) {
            return undefined;
        }
        return this.factoryMap.get(componentName);
    };
    MaDynamicArticleFactoryService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaDynamicArticleFactoryService.ctorParameters = function () { return []; };
    return MaDynamicArticleFactoryService;
}());
exports.MaDynamicArticleFactoryService = MaDynamicArticleFactoryService;
//# sourceMappingURL=dynamic-article-factory.service.js.map