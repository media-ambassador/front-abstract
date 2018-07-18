"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_declaration_1 = require("./text/text.declaration");
var _2columns_1 = require("./2columns/2columns");
var _ = require("lodash");
exports.DefaultComponentDeclarations = {
    'text': text_declaration_1.MaTextComponentDeclaration,
    '2columns': _2columns_1.MaTwoColumnsComponentDeclaration
};
exports.MaDynamicArticleDeclarationFactory = function MaDynamicArticleDeclarationFactory_(componentFactoryResolver, componentFactoryGenerator, customDeclaration) {
    if (customDeclaration === void 0) { customDeclaration = {}; }
    var declarations = _.extend(exports.DefaultComponentDeclarations, customDeclaration);
    _.forEach(declarations, function (declaration, key) {
        componentFactoryResolver.registerFactory(key, componentFactoryGenerator.generateFactory(declaration));
    });
    return true;
};
//# sourceMappingURL=declarations.js.map