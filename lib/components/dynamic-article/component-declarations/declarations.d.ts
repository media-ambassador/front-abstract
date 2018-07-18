import { Dictionary } from 'lodash';
import { MaDynamicArticleFactoryService } from '../dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleFactoryGenerator } from '../dynamic-article-factory-generator/dynamic-article-factory-generator';
import { MaDynamicArticleFactoryGeneratorParams } from '../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
export interface MaComponentDeclarations extends Dictionary<MaDynamicArticleFactoryGeneratorParams<any, any>> {
}
export declare const DefaultComponentDeclarations: MaComponentDeclarations;
export declare const MaDynamicArticleDeclarationFactory: (componentFactoryResolver: MaDynamicArticleFactoryService, componentFactoryGenerator: MaDynamicArticleFactoryGenerator, customDeclaration?: MaComponentDeclarations) => boolean;
