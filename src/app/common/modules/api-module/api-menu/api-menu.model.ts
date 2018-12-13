import { MaApiResponse } from '../api-common.model';

export interface MaApiMenuCategoryChild {
  category_child_id?: string;
  category_child_name?: string;
  category_child_slug_name?: string;
  category_child_url?: string;
}

export interface MaApiMenuCategoryData<T extends MaApiMenuCategoryChild> {
  category_id?: number;
  category_parent_id?: number;
  category_is_root?: number | boolean;
  category_name?: string;
  category_slug_name?: string;
  category_code?: string;
  category_level?: number;
  category_metatitle?: string;
  category_keyword?: string;
  category_metadesc?: string;
  category_status?: boolean;
  category_special?: boolean;
  category_sort?: number;
  category_children?: T[];
  category_description?: string;
  category_longdescription?: string;
  category_photo?: string;
  category_banner1?: string;
  category_banner2?: string;
  category_url?: string;
}
export interface MaApiMenuCategories<T extends MaApiMenuCategoryData<MaApiMenuCategoryChild>> extends MaApiResponse {
  data: T[];
}

export interface MaMenuItemChildren extends MaMenuItem<MaMenuItemChildren> {}

export interface MaMenuItem<T extends MaMenuItemChildren> {
  active?: boolean;
  children?: T[];
  displayName?: string;
  icon?: string;
  id?: string;
  name?: string;
  category_id?: number;
}
