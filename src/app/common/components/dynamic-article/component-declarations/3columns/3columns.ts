import { ComponentRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
import { MaThreeColumnsTextComponent } from '../../components/three-columns-text/three-columns-text.component';
import { MaThreeColumnsTextLayout } from '../../components/three-columns-text/three-columns-text.model';

export const MaThreeColumnsComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaThreeColumnsTextComponent, MaThreeColumnsTextLayout> = {
  componentType: MaThreeColumnsTextComponent,
  classList: [ '' ],
  onInit: (componentRef: ComponentRef<MaThreeColumnsTextComponent>, componentData: MaThreeColumnsTextLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
