import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleFactoryGenerator } from './dynamic-article-factory-generator/dynamic-article-factory-generator';
import { MaComponentDeclarations } from './component-declarations/declarations';
export declare const ComponentDeclarationsName = "ComponentDeclarationsNameRef";
export declare class MaDynamicDeclarationService {
    protected dynamicArticleFactoryService: MaDynamicArticleFactoryService;
    protected customDeclarations: MaComponentDeclarations;
    componentFactoryGenerator: MaDynamicArticleFactoryGenerator;
    constructor(dynamicArticleFactoryService: MaDynamicArticleFactoryService, customDeclarations: MaComponentDeclarations);
    init(): void;
}
