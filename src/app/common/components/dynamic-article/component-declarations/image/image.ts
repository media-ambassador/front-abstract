import { ComponentRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
import { MaImageComponent } from '../../components/image/image.component';
import { MaImageLayout } from '../../components/image/image.model';

export const MaImageComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaImageComponent, MaImageLayout> = {
  componentType: MaImageComponent,
  classList: [ 'dynamic-image-component' ],
  onInit: (componentRef: ComponentRef<MaImageComponent>, componentData: MaImageLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
