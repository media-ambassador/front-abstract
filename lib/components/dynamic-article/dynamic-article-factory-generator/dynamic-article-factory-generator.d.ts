import { ComponentRef } from '@angular/core';
import { MaDynamicArticleFactoryGeneratorParams } from './dynamic-article-factory-generator.model';
import { MaDynamicArticleData, MaDynamicComponentFactory } from '../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
export declare class MaDynamicArticleFactoryGenerator {
    protected generatorInit<T, DT extends MaDynamicArticleData<any>>(cmpRef: ComponentRef<any>, params: MaDynamicArticleFactoryGeneratorParams<T, DT>, cmpData: DT): void;
    generateFactory<T, DT extends MaDynamicArticleData<any>>(params: MaDynamicArticleFactoryGeneratorParams<T, DT>): MaDynamicComponentFactory<T>;
}
