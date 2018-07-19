import { MaDynamicArticleData } from '../../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
export interface MaThreeColumnsTextLayoutContent {
    left: string;
    center: string;
    right: string;
}
export interface MaThreeColumnsTextLayout extends MaDynamicArticleData<MaThreeColumnsTextLayoutContent> {
}
