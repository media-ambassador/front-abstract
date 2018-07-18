import { Injector, Renderer2, ComponentRef, ComponentFactory, ComponentFactoryResolver, NgModuleRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from './dynamic-article-factory-generator.model';
import { MaDynamicArticleData, MaDynamicComponentFactory } from '../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';

export class MaDynamicArticleFactoryGenerator {

  private generatorInit<T, DT extends MaDynamicArticleData<any>>(
    cmpRef: ComponentRef<any>,
    params: MaDynamicArticleFactoryGeneratorParams<T, DT>,
    cmpData: DT) {

    if (params.classList && params.classList.length) {
      const renderer = cmpRef.injector.get(Renderer2);
      params.classList.forEach(className => {
        if (className.length > 0) {
          renderer.addClass(cmpRef.location.nativeElement, className);
        }
      });
    }
  }

  generateFactory <T, DT extends MaDynamicArticleData<any>>(params: MaDynamicArticleFactoryGeneratorParams<T, DT>): MaDynamicComponentFactory<T> {
    const initComponent = this.generatorInit;

    return (containerInjector: Injector, componentData: DT): ComponentFactory<T> => {
      const componentFactoryResolver = containerInjector.get(ComponentFactoryResolver);
      const factory = componentFactoryResolver.resolveComponentFactory(params.componentType);

      const extendedFactory = Object.create(factory, {
        create: {
          value: (injector: Injector, projectableNodes?: any[][], rootSelectorOrNode?: string | any, ngModule?: NgModuleRef<any>) => {
            const componentRef = factory.create(injector, projectableNodes, rootSelectorOrNode, ngModule);
            initComponent(componentRef, params, componentData);
            if (params.onInit) {
              params.onInit(componentRef, componentData);
            }
            return componentRef;
          }
        }
      });

      return extendedFactory;
    };
  }
}
