import { Injectable } from '@angular/core';
import { MaDynamicComponentFactory, MaDynamicArticleType } from './dynamic-article-factory-resolver.model';

@Injectable()
export class MaDynamicArticleFactoryService {

  private factoryMap = new Map<MaDynamicArticleType, MaDynamicComponentFactory<any>>();

  registerFactory(componentName: MaDynamicArticleType, componentFactory: MaDynamicComponentFactory<any>) {
    this.factoryMap.set(componentName, componentFactory);
  }

  hasFactory(componentName: MaDynamicArticleType): boolean {
    return this.factoryMap.has(componentName);
  }

  resolveComponentFactory(componentName: MaDynamicArticleType): MaDynamicComponentFactory<any> {
    if (!this.factoryMap.has(componentName)) {
      return undefined;
    }

    return this.factoryMap.get(componentName);
  }

  constructor() { }

}
