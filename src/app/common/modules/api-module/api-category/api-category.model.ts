import { MaApiProductData } from '../api-product/api-product.model';
import { MaApiBreadcrumbs, MaApiFilters } from '../api-common.model';

export interface MaApiCategoryData {
  category_banner_title?: string;
  category_banner1?: string;
  category_banner2?: string;
  category_banner_slogan?: string;
  category_banner_description?: string;
  category_children?: any[];
  category_code?: string;
  category_description?: string;
  category_id?: number;
  category_is_root?: number;
  category_keyword?: string;
  category_level?: number;
  category_longdescription?: string;
  category_menu_name?: string;
  category_metadesc?: string;
  category_metatitle?: string;
  category_name?: string;
  category_parent_id?: number;
  category_photo?: string;
  category_slug_name?: string;
  category_sort?: number;
  category_special?: boolean;
  category_status?: boolean;
  category_url?: string;
}

export interface MaApiCategoryResponse {
  brand_data?: any;
  brand_id?: number;
  brand_name?: string;
  breadcrumbs?: MaApiBreadcrumbs[];
  category_name?: string;
  category_data?: MaApiCategoryData;
  contentTitle?: string;
  currency?: string;
  current_category_level?: number;
  current_lang?: string;
  debug?: boolean;
  description?: string;
  filter_type?: string;
  filters?: MaApiFilters;
  isCategoryBanner?: any;
  keywords?: string;
  list: MaApiProductData[];
  order?: string;
  page?: string | number;
  pagination_tab?: Object;
  pcategory?: number;
  promo?: number;
  pseudo_category?: number;
  require_redirect?: boolean;
  require_refresh?: boolean;
  results?: string | number;
  results_on_page?: number;
  robots?: string;
  sale?: number;
  search?: string;
  stats?: any[];
  t?: Object;
  title?: string;
  total_pages?: number;
  total_results?: number;
}
