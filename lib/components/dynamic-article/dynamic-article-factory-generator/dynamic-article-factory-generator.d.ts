import { MaDynamicArticleFactoryGeneratorParams } from './dynamic-article-factory-generator.model';
import { MaDynamicArticleData, MaDynamicComponentFactory } from '../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
export declare class MaDynamicArticleFactoryGenerator {
    private generatorInit<T, DT>(cmpRef, params, cmpData);
    generateFactory<T, DT extends MaDynamicArticleData<any>>(params: MaDynamicArticleFactoryGeneratorParams<T, DT>): MaDynamicComponentFactory<T>;
}
