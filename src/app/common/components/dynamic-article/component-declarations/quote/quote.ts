import { ComponentRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
import { MaQuoteComponent } from '../../components/quote/quote.component';
import { MaQuoteLayout } from '../../components/quote/quote.model';

export const MaQuoteComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaQuoteComponent, MaQuoteLayout> = {
  componentType: MaQuoteComponent,
  classList: [ 'dynamic-quote-component' ],
  onInit: (componentRef: ComponentRef<MaQuoteComponent>, componentData: MaQuoteLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
