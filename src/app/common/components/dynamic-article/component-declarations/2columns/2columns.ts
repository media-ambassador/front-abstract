import { ComponentRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
import { MaTwoColumnsTextComponent } from '../../components/two-columns-text/two-columns-text.component';
import { MaTwoColumnsTextLayout } from '../../components/two-columns-text/two-columns-text.model';

export const MaTwoColumnsComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaTwoColumnsTextComponent, MaTwoColumnsTextLayout> = {
  componentType: MaTwoColumnsTextComponent,
  classList: [ 'dynamic-two-columns-component' ],
  onInit: (componentRef: ComponentRef<MaTwoColumnsTextComponent>, componentData: MaTwoColumnsTextLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
