"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forEach_1 = require("lodash/forEach");
var extend_1 = require("lodash/extend");
var dynamic_article_factory_service_1 = require("./dynamic-article-factory-resolver/dynamic-article-factory.service");
var dynamic_article_factory_generator_1 = require("./dynamic-article-factory-generator/dynamic-article-factory-generator");
var declarations_1 = require("./component-declarations/declarations");
exports.ComponentDeclarationsName = 'ComponentDeclarationsNameRef';
var MaDynamicDeclarationService = /** @class */ (function () {
    function MaDynamicDeclarationService(dynamicArticleFactoryService, customDeclarations) {
        this.dynamicArticleFactoryService = dynamicArticleFactoryService;
        this.customDeclarations = customDeclarations;
        this.componentFactoryGenerator = new dynamic_article_factory_generator_1.MaDynamicArticleFactoryGenerator();
    }
    MaDynamicDeclarationService.prototype.init = function () {
        var _this = this;
        var declarations = extend_1.default(declarations_1.DefaultComponentDeclarations, this.customDeclarations);
        forEach_1.default(declarations, function (declaration, key) {
            _this.dynamicArticleFactoryService.registerFactory(key, _this.componentFactoryGenerator.generateFactory(declaration));
        });
    };
    MaDynamicDeclarationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaDynamicDeclarationService.ctorParameters = function () { return [
        { type: dynamic_article_factory_service_1.MaDynamicArticleFactoryService, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.ComponentDeclarationsName,] },] },
    ]; };
    return MaDynamicDeclarationService;
}());
exports.MaDynamicDeclarationService = MaDynamicDeclarationService;
//# sourceMappingURL=dynamic-declaration.service.js.map