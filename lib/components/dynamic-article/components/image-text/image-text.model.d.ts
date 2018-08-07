import { MaDynamicArticleData } from '../../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
import { MaImageData } from '../../dynamic-article-common.model';
export interface MaImageTextLayoutContent {
    image: MaImageData;
    right: string;
}
export interface MaImageTextLayout extends MaDynamicArticleData<MaImageTextLayoutContent> {
}
