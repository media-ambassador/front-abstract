import { Injectable, Inject } from '@angular/core';
import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleFactoryGenerator } from './dynamic-article-factory-generator/dynamic-article-factory-generator';
import { DefaultComponentDeclarations, MaComponentDeclarations } from './component-declarations/declarations';

export const ComponentDeclarationsName = 'ComponentDeclarationsNameRef';

import * as _ from 'lodash';
import { MaDynamicArticleType } from '.';

@Injectable()
export class MaDynamicDeclarationService {
  componentFactoryGenerator: MaDynamicArticleFactoryGenerator;

  constructor(protected dynamicArticleFactoryService: MaDynamicArticleFactoryService,
              @Inject(ComponentDeclarationsName) protected customDeclarations: MaComponentDeclarations) {
    this.componentFactoryGenerator = new MaDynamicArticleFactoryGenerator();
  }

  init() {
    const declarations = _.extend(DefaultComponentDeclarations, this.customDeclarations);

    _.forEach(declarations, (declaration, key) => {
      this.dynamicArticleFactoryService.registerFactory(key as MaDynamicArticleType, this.componentFactoryGenerator.generateFactory(declaration));
    });
  }
}
