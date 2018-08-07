import { ComponentRef } from '@angular/core';

import { MaDynamicArticleFactoryGeneratorParams } from '../../dynamic-article-factory-generator/dynamic-article-factory-generator.model';
import { MaYouTubeComponent } from '../../components/youtube/youtube.component';
import { MaYouTubeLayout } from '../../components/youtube/youtube.model';

export const MaYouTubeComponentDeclaration: MaDynamicArticleFactoryGeneratorParams<MaYouTubeComponent, MaYouTubeLayout> = {
  componentType: MaYouTubeComponent,
  classList: [ '' ],
  onInit: (componentRef: ComponentRef<MaYouTubeComponent>, componentData: MaYouTubeLayout) => {
    componentRef.instance.content = componentData.content;
  }
};
