import { MaDynamicArticleData } from '../../dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
export interface MaTwoColumnsTextLayoutContent {
    left: string;
    right: string;
}
export interface MaTwoColumnsTextLayout extends MaDynamicArticleData<MaTwoColumnsTextLayoutContent> {
}
