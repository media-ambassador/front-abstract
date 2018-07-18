import { ComponentFactory, Injector } from '@angular/core';

export function isDynamicComponentData(componentData: any): componentData is MaDynamicArticleData<any> {
 return (<MaDynamicArticleData<any>>componentData).layout !== undefined
  && (<MaDynamicArticleData<any>>componentData).content !== undefined;
}

export type MaDynamicArticleType = 'text' | '2columns';

export interface MaDynamicArticleData<T> {
  layout: MaDynamicArticleType;
  content: T;
  order: number;
}

export type MaDynamicComponentFactory<T> = (injector: Injector, componentData: MaDynamicArticleData<any>) => ComponentFactory<T>;
