import { MaApiResponse } from '../api-common.model';
export interface MaApiMenuCategories extends MaApiResponse {
    data: MaApiMenuCategoryData[];
}
export interface MaApiMenuCategoryData {
    category_id: number;
    category_parent_id: number;
    category_is_root: number | boolean;
    category_name: string;
    category_slug_name: string;
    category_code: string;
    category_level: number;
    category_metatitle: string;
    category_keyword: string;
    category_metadesc: string;
    category_status: boolean;
    category_special: boolean;
    category_sort: number;
    category_children: MaApiMenuCategoryChild[];
    category_description: string;
    category_longdescription: string;
    category_photo: string;
    category_banner1: string;
    category_banner2: string;
    category_url: string;
    _boost: number;
}
export interface MaApiMenuCategoryChild {
    category_child_id: string;
    category_child_name: string;
    category_child_slug_name: string;
    category_child_url: string;
}
export interface MaMenuItem {
    active?: boolean;
    children?: MaMenuItem[];
    displayName?: string;
    icon?: string;
    id?: string;
    name?: string;
}
