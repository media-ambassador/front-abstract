import { Dictionary } from 'lodash';

import { MaDynamicArticleFactoryService } from '../dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleFactoryGenerator } from '../dynamic-article-factory-generator/dynamic-article-factory-generator';

import { MaTextComponentDeclaration } from './text/text.declaration';
import { MaTwoColumnsComponentDeclaration } from './2columns/2columns';
import { MaDynamicArticleType } from '../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
import { MaDynamicArticleFactoryGeneratorParams } from '../dynamic-article-factory-generator/dynamic-article-factory-generator.model';

import * as _ from 'lodash';

export interface MaComponentDeclarations extends Dictionary<MaDynamicArticleFactoryGeneratorParams<any, any>> { }

export const DefaultComponentDeclarations: MaComponentDeclarations = {
  'text': MaTextComponentDeclaration,
  '2columns': MaTwoColumnsComponentDeclaration
};

export const MaDynamicArticleDeclarationFactory = function MaDynamicArticleDeclarationFactory_(
  componentFactoryResolver: MaDynamicArticleFactoryService,
  componentFactoryGenerator: MaDynamicArticleFactoryGenerator,
  customDeclaration: MaComponentDeclarations = { }
) {

  const declarations = _.extend(DefaultComponentDeclarations, customDeclaration);

  _.forEach(declarations, (declaration, key) => {
    componentFactoryResolver.registerFactory(key as MaDynamicArticleType, componentFactoryGenerator.generateFactory(declaration));
  });

  return true;
};
