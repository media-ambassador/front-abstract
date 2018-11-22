import { MaDynamicArticleFactoryService } from '../dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleFactoryGenerator } from '../dynamic-article-factory-generator/dynamic-article-factory-generator';
import { MaDynamicArticleType } from '../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
import { MaDynamicArticleFactoryGeneratorParams } from '../dynamic-article-factory-generator/dynamic-article-factory-generator.model';

import { MaTextComponentDeclaration } from './text/text.declaration';
import { MaTwoColumnsComponentDeclaration } from './2columns/2columns';
import { MaThreeColumnsComponentDeclaration } from './3columns/3columns';
import { MaTextImageComponentDeclaration } from './textImage/textImage';
import { MaImageTextComponentDeclaration } from './imageText/imageText';
import { MaImageComponentDeclaration } from './image/image';
import { MaQuoteComponentDeclaration } from './quote/quote';
import { MaYouTubeComponentDeclaration } from './youTube/youTube';

import { Dictionary } from 'lodash';
import * as _ from 'lodash';

export interface MaComponentDeclarations extends Dictionary<MaDynamicArticleFactoryGeneratorParams<any, any>> { }

export const DefaultComponentDeclarations: MaComponentDeclarations = {
  'text': MaTextComponentDeclaration,
  '2columns': MaTwoColumnsComponentDeclaration,
  '3columns': MaThreeColumnsComponentDeclaration,
  'textImage': MaTextImageComponentDeclaration,
  'imageText': MaImageTextComponentDeclaration,
  'image': MaImageComponentDeclaration,
  'quote': MaQuoteComponentDeclaration,
  'youTube': MaYouTubeComponentDeclaration
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
