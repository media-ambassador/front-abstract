import { MaDynamicArticleData } from '../../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
import { MaImageData } from '../../dynamic-article-common.model';


export interface MaImageLayoutContent {
  image: MaImageData;
}

export interface MaImageLayout extends MaDynamicArticleData<MaImageLayoutContent> {}
