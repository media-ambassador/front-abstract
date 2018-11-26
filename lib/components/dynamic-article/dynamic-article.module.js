"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dynamic_article_component_1 = require("./dynamic-article.component");
var dynamic_article_factory_service_1 = require("./dynamic-article-factory-resolver/dynamic-article-factory.service");
var block_text_component_1 = require("./components/block-text/block-text.component");
var dynamic_article_factory_generator_1 = require("./dynamic-article-factory-generator/dynamic-article-factory-generator");
var declarations_1 = require("./component-declarations/declarations");
var two_columns_text_component_1 = require("./components/two-columns-text/two-columns-text.component");
var three_columns_text_component_1 = require("./components/three-columns-text/three-columns-text.component");
var image_text_component_1 = require("./components/image-text/image-text.component");
var text_image_component_1 = require("./components/text-image/text-image.component");
var image_component_1 = require("./components/image/image.component");
var quote_component_1 = require("./components/quote/quote.component");
var youtube_component_1 = require("./components/youtube/youtube.component");
var safe_html_1 = require("../../pipes/safe-html");
var markup_module_1 = require("../../modules/markup/markup.module");
var ComponentDeclarationsName = 'ComponentDeclarationsNameRef';
exports.UNIQUE_DYNAMIC_MODULE = new core_1.InjectionToken('DYNAMIC_MODULE');
function articleDeclarationFactory(factoryService, factoryGenerator, injector) {
    return function () {
        var customDeclaration = injector.get(ComponentDeclarationsName);
        declarations_1.MaDynamicArticleDeclarationFactory(factoryService, factoryGenerator, customDeclaration);
    };
}
exports.articleDeclarationFactory = articleDeclarationFactory;
var MaDynamicArticleModule = /** @class */ (function () {
    function MaDynamicArticleModule() {
    }
    MaDynamicArticleModule.forRoot = function (customDeclaration) {
        if (customDeclaration === void 0) { customDeclaration = {}; }
        return {
            ngModule: MaDynamicArticleModule,
            providers: [
                { provide: ComponentDeclarationsName, useValue: customDeclaration },
                {
                    provide: exports.UNIQUE_DYNAMIC_MODULE,
                    useFactory: articleDeclarationFactory,
                    deps: [dynamic_article_factory_service_1.MaDynamicArticleFactoryService, dynamic_article_factory_generator_1.MaDynamicArticleFactoryGenerator, core_1.Injector],
                    multi: true
                }
            ]
        };
    };
    MaDynamicArticleModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        markup_module_1.MaMarkupModule
                    ],
                    declarations: [
                        dynamic_article_component_1.MaDynamicArticleComponent,
                        block_text_component_1.MaBlockTextComponent,
                        two_columns_text_component_1.MaTwoColumnsTextComponent,
                        three_columns_text_component_1.MaThreeColumnsTextComponent,
                        image_text_component_1.MaImageTextComponent,
                        text_image_component_1.MaTextImageComponent,
                        image_component_1.MaImageComponent,
                        quote_component_1.MaQuoteComponent,
                        youtube_component_1.MaYouTubeComponent,
                        safe_html_1.MaSafeHtmlPipe
                    ],
                    providers: [
                        dynamic_article_factory_service_1.MaDynamicArticleFactoryService,
                        { provide: dynamic_article_factory_generator_1.MaDynamicArticleFactoryGenerator, useClass: dynamic_article_factory_generator_1.MaDynamicArticleFactoryGenerator },
                    ],
                    exports: [
                        dynamic_article_component_1.MaDynamicArticleComponent,
                    ],
                    entryComponents: [
                        block_text_component_1.MaBlockTextComponent,
                        two_columns_text_component_1.MaTwoColumnsTextComponent,
                        three_columns_text_component_1.MaThreeColumnsTextComponent,
                        image_text_component_1.MaImageTextComponent,
                        text_image_component_1.MaTextImageComponent,
                        image_component_1.MaImageComponent,
                        quote_component_1.MaQuoteComponent,
                        youtube_component_1.MaYouTubeComponent
                    ]
                },] },
    ];
    return MaDynamicArticleModule;
}());
exports.MaDynamicArticleModule = MaDynamicArticleModule;
//# sourceMappingURL=dynamic-article.module.js.map