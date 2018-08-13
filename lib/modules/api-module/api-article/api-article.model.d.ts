import { Dictionary } from 'lodash';
import { MaApiResponse, MaApiSeo } from '../api-common.model';
export interface MaApiArticleCategoryData {
    content: string;
    id?: string;
    seo?: MaApiSeo;
    status?: string;
    tag?: string;
    target_link?: string;
    title: string;
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
    order: number;
}
export interface MaApiDynamicArticleTagData {
    content: MaApiDynamicArticleTagContent[];
    entry: MaApiArticleCategoryData;
}
export interface MaApiDynamicArticleTagsResponse extends MaApiResponse {
    data: Dictionary<MaApiDynamicArticleTagData>;
}