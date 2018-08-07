import { MaDynamicArticleData } from '../../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
import { MaImageData } from '../../dynamic-article-common.model';
export interface MaTextImageLayoutContent {
    left: string;
    image: MaImageData;
}
export interface MaTextImageLayout extends MaDynamicArticleData<MaTextImageLayoutContent> {
}
