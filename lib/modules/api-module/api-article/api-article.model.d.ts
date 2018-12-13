import { MaApiResponse } from '../api-common.model';
import { MaApiSeo } from '../api-meta';
import { Dictionary } from '../../../models';
export interface MaApiArticleCategoryData<S extends MaApiSeo> {
    content?: string;
    id?: string;
    seo?: S;
    status?: string;
    tag?: string;
    target_link?: string;
    title?: string;
    grouping?: string;
}
export interface MaApiArticleCategoriesResponse<AC extends MaApiArticleCategoryData<MaApiSeo>> extends MaApiResponse {
    data: Dictionary<Dictionary<AC>>;
}
export interface MaApiArticleTagsResponse<AC extends MaApiArticleCategoryData<MaApiSeo>> extends MaApiResponse {
    data: Dictionary<AC>;
}
export declare type MaApiDynamicArticleLayoutType = 'text' | '2columns' | '3columns' | 'textImage' | 'imageText' | 'image' | 'quote' | 'youTube';
export interface MaApiDynamicArticleCategoriesResponse<AC extends MaApiArticleCategoryData<MaApiSeo>> extends MaApiResponse {
    data: Dictionary<Dictionary<AC>>;
}
export interface MaApiDynamicArticleTagContent<LT extends MaApiDynamicArticleLayoutType> {
    content: any;
    layout: LT;
    order?: number;
}
export interface MaApiDynamicArticleTagData<AT extends MaApiDynamicArticleTagContent<MaApiDynamicArticleLayoutType>, CD extends MaApiArticleCategoryData<MaApiSeo>> {
    content: AT[];
    entry: CD;
    categories?: MaApiDynamicArticleCategoryInfo[];
}
export interface MaApiDynamicArticleTagsResponse<TD extends MaApiDynamicArticleTagData<MaApiDynamicArticleTagContent<MaApiDynamicArticleLayoutType>, MaApiArticleCategoryData<MaApiSeo>>> extends MaApiResponse {
    data: Dictionary<TD>;
}
export interface MaApiDynamicArticleCategoryInfo {
    bc_id?: string;
    bc_name?: string;
    bc_news?: string;
    bc_banner?: string;
    bc_description?: string;
    bc_lang?: string;
}
