import { Type, ComponentRef } from '@angular/core';
import { MaDynamicArticleData } from '../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
export declare type MaDynamicArticleFactoryGeneratorInit<C, DT extends MaDynamicArticleData<any>> = (componentRef: ComponentRef<C>, componentData: DT) => void;
export interface MaDynamicArticleFactoryGeneratorParams<T, DT extends MaDynamicArticleData<any>> {
    componentType: Type<T>;
    classList?: string[];
    onInit?: MaDynamicArticleFactoryGeneratorInit<T, DT>;
}
