"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_declaration_1 = require("./text/text.declaration");
var _2columns_1 = require("./2columns/2columns");
var _3columns_1 = require("./3columns/3columns");
var textImage_1 = require("./textImage/textImage");
var imageText_1 = require("./imageText/imageText");
var image_1 = require("./image/image");
var quote_1 = require("./quote/quote");
var youTube_1 = require("./youTube/youTube");
var _ = require("lodash");
exports.DefaultComponentDeclarations = {
    'text': text_declaration_1.MaTextComponentDeclaration,
    '2columns': _2columns_1.MaTwoColumnsComponentDeclaration,
    '3columns': _3columns_1.MaThreeColumnsComponentDeclaration,
    'textImage': textImage_1.MaTextImageComponentDeclaration,
    'imageText': imageText_1.MaImageTextComponentDeclaration,
    'image': image_1.MaImageComponentDeclaration,
    'quote': quote_1.MaQuoteComponentDeclaration,
    'youTube': youTube_1.MaYouTubeComponentDeclaration
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