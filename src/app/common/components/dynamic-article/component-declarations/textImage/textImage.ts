import { ComponentRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
import { MaTextImageComponent } from '../../components/text-image/text-image.component';
import { MaTextImageLayout } from '../../components/text-image/text-image.model';

export const MaTextImageComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaTextImageComponent, MaTextImageLayout> = {
  componentType: MaTextImageComponent,
  classList: [ 'dynamic-text-image-component' ],
  onInit: (componentRef: ComponentRef<MaTextImageComponent>, componentData: MaTextImageLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
