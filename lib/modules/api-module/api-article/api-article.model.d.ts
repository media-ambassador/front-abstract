import { Dictionary } from 'lodash';
import { MaApiResponse } from '../api-common.model';
import { MaApiSeo } from '../api-meta';
export interface MaApiArticleCategoryData {
    content?: string;
    id?: string;
    seo?: MaApiSeo;
    status?: string;
    tag?: string;
    target_link?: string;
    title?: string;
    grouping?: string;
}
export interface MaApiArticleCategoriesResponse extends MaApiResponse {
    data: Dictionary<Dictionary<MaApiArticleCategoryData>>;
}
export interface MaApiArticleTagsResponse extends MaApiResponse {
    data: Dictionary<MaApiArticleCategoryData>;
}
export declare type MaApiDynamicArticleLayoutType = 'text' | '2columns' | '3columns' | 'textImage' | 'imageText' | 'image' | 'quote' | 'youTube';
export interface MaApiDynamicArticleCategoriesResponse extends MaApiResponse {
    data: Dictionary<Dictionary<MaApiArticleCategoryData>>;
}
export interface MaApiDynamicArticleTagContent {
    content: any;
    layout: MaApiDynamicArticleLayoutType;
    order?: number;
}
export interface MaApiDynamicArticleTagData {
    content: MaApiDynamicArticleTagContent[];
    entry: MaApiArticleCategoryData;
    categories?: MaApiDynamicArticleCategoryInfo[];
}
export interface MaApiDynamicArticleTagsResponse extends MaApiResponse {
    data: Dictionary<MaApiDynamicArticleTagData>;
}
export interface MaApiDynamicArticleCategoryInfo {
    bc_id?: string;
    bc_name?: string;
    bc_news?: string;
    bc_banner?: string;
    bc_description?: string;
    bc_lang?: string;
}
