import { Injectable, Inject } from '@angular/core';
import forEach from 'lodash/forEach';
import extend from 'lodash/extend';

import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleFactoryGenerator } from './dynamic-article-factory-generator/dynamic-article-factory-generator';
import { DefaultComponentDeclarations, MaComponentDeclarations } from './component-declarations/declarations';

export const ComponentDeclarationsName = 'ComponentDeclarationsNameRef';

import { MaDynamicArticleType } from '.';

@Injectable()
export class MaDynamicDeclarationService {
  componentFactoryGenerator: MaDynamicArticleFactoryGenerator;

  constructor(protected dynamicArticleFactoryService: MaDynamicArticleFactoryService,
              @Inject(ComponentDeclarationsName) protected customDeclarations: MaComponentDeclarations) {
    this.componentFactoryGenerator = new MaDynamicArticleFactoryGenerator();
  }

  init() {
    const declarations = extend(DefaultComponentDeclarations, this.customDeclarations);

    forEach(declarations, (declaration, key) => {
      this.dynamicArticleFactoryService.registerFactory(key as MaDynamicArticleType, this.componentFactoryGenerator.generateFactory(declaration));
    });
  }
}
