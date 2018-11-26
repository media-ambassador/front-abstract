import { ModuleWithProviders, Injector } from '@angular/core';
import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleFactoryGenerator } from './dynamic-article-factory-generator/dynamic-article-factory-generator';
import { MaComponentDeclarations } from './component-declarations/declarations';
export declare function MaDynamicDeclarationCreator(dynamicArticleFactoryService: MaDynamicArticleFactoryService, customDeclarations: MaComponentDeclarations): void;
export declare function articleDeclarationFactory(factoryService: MaDynamicArticleFactoryService, factoryGenerator: MaDynamicArticleFactoryGenerator, injector: Injector): () => void;
export declare class MaDynamicArticleModule {
    static forRoot(customDeclaration?: MaComponentDeclarations): ModuleWithProviders;
}
