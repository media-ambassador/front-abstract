"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaDynamicArticleFactoryGenerator = /** @class */ (function () {
    function MaDynamicArticleFactoryGenerator() {
    }
    MaDynamicArticleFactoryGenerator.prototype.generatorInit = function (cmpRef, params, cmpData) {
        if (params.classList && params.classList.length) {
            var renderer_1 = cmpRef.injector.get(core_1.Renderer2);
            params.classList.forEach(function (className) {
                if (className.length > 0) {
                    renderer_1.addClass(cmpRef.location.nativeElement, className);
                }
            });
        }
    };
    MaDynamicArticleFactoryGenerator.prototype.generateFactory = function (params) {
        var initComponent = this.generatorInit;
        return function (containerInjector, componentData) {
            var componentFactoryResolver = containerInjector.get(core_1.ComponentFactoryResolver);
            var factory = componentFactoryResolver.resolveComponentFactory(params.componentType);
            var extendedFactory = Object.create(factory, {
                create: {
                    value: function (injector, projectableNodes, rootSelectorOrNode, ngModule) {
                        var componentRef = factory.create(injector, projectableNodes, rootSelectorOrNode, ngModule);
                        initComponent(componentRef, params, componentData);
                        if (params.onInit) {
                            params.onInit(componentRef, componentData);
                        }
                        return componentRef;
                    }
                }
            });
            return extendedFactory;
        };
    };
    return MaDynamicArticleFactoryGenerator;
}());
exports.MaDynamicArticleFactoryGenerator = MaDynamicArticleFactoryGenerator;
//# sourceMappingURL=dynamic-article-factory-generator.js.map