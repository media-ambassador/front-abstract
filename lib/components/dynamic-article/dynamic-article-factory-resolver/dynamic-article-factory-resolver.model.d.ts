import { ComponentFactory, Injector } from '@angular/core';
export declare function isDynamicComponentData(componentData: any): componentData is MaDynamicArticleData<any>;
export declare type MaDynamicArticleType = 'text' | '2columns';
export interface MaDynamicArticleData<T> {
    layout: MaDynamicArticleType;
    content: T;
    order: number;
}
export declare type MaDynamicComponentFactory<T> = (injector: Injector, componentData: MaDynamicArticleData<any>) => ComponentFactory<T>;
