"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_article_factory_service_1 = require("./dynamic-article-factory-resolver/dynamic-article-factory.service");
var dynamic_declaration_service_1 = require("./dynamic-declaration.service");
var MaDynamicArticleComponent = /** @class */ (function () {
    function MaDynamicArticleComponent(injector, componentFactory, dynamicDeclarationService) {
        this.injector = injector;
        this.componentFactory = componentFactory;
        this.dynamicDeclarationService = dynamicDeclarationService;
    }
    MaDynamicArticleComponent.prototype.ngOnInit = function () {
        this.createComponents();
    };
    MaDynamicArticleComponent.prototype.ngAfterViewInit = function () {
    };
    MaDynamicArticleComponent.prototype.createComponents = function () {
        var _this = this;
        if (!this.blocks) {
            return;
        }
        this.vc.clear();
        this.blocks.forEach(function (block) {
            setTimeout(function () {
                var componentFactory = _this.componentFactory.resolveComponentFactory(block.layout);
                if (componentFactory) {
                    _this.vc.createComponent(componentFactory(_this.injector, block));
                }
            }, 50);
        });
    };
    MaDynamicArticleComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    MaDynamicArticleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-dynamic-article',
                    template: "\n    <ng-container #vc></ng-container>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaDynamicArticleComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
        { type: dynamic_article_factory_service_1.MaDynamicArticleFactoryService, },
        { type: dynamic_declaration_service_1.MaDynamicDeclarationService, },
    ]; };
    MaDynamicArticleComponent.propDecorators = {
        "blocks": [{ type: core_1.Input },],
        "vc": [{ type: core_1.ViewChild, args: ['vc', { read: core_1.ViewContainerRef },] },],
    };
    return MaDynamicArticleComponent;
}());
exports.MaDynamicArticleComponent = MaDynamicArticleComponent;
//# sourceMappingURL=dynamic-article.component.js.map