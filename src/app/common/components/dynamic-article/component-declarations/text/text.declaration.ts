import { ComponentRef } from '@angular/core';

import { MaBlockTextComponent } from '../../components/block-text/block-text.component';
import { MaBlockTextLayout } from '../../components/block-text/block-text.model';
import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';

export const MaTextComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaBlockTextComponent, MaBlockTextLayout> = {
  componentType: MaBlockTextComponent,
  classList: [ 'dynamic-text-component' ],
  onInit: (componentRef: ComponentRef<MaBlockTextComponent>, componentData: MaBlockTextLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
