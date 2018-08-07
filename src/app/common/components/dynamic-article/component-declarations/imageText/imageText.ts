import { ComponentRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
import { MaImageTextComponent } from '../../components/image-text/image-text.component';
import { MaImageTextLayout } from '../../components/image-text/image-text.model';

export const MaImageTextComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaImageTextComponent, MaImageTextLayout> = {
  componentType: MaImageTextComponent,
  classList: [ '' ],
  onInit: (componentRef: ComponentRef<MaImageTextComponent>, componentData: MaImageTextLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
