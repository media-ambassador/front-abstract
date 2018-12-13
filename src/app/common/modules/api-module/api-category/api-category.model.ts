import { MaApiProductData, MaApiProductAttribute, MaApiProductCustomFlag, MaApiProductImage, MaApiProductTemplate, MaApiProductSize, MaApiProductVariation } from '../api-product/api-product.model';
import { MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../api-common.model';
import { MaApiShopData } from '../api-shop';

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

export interface MaApiCategoryResponse<T extends MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>,
                                       B extends MaApiBreadcrumbs,
                                       C extends MaApiCategoryData,
                                       P extends MaApiProductData<MaApiProductAttribute,
                                                                  MaApiProductCustomFlag,
                                                                  MaApiProductImage,
                                                                  MaApiProductTemplate,
                                                                  MaApiShopData,
                                                                  MaApiProductSize,
                                                                  MaApiProductVariation<MaApiProductAttribute,
                                                                                        MaApiProductImage,
                                                                                        MaApiShopData>
                                                                  >
                                      > {
  brand_data?: any;
  brand_id?: number;
  brand_name?: string;
  breadcrumbs?: B[];
  category_name?: string;
  category_data?: C;
  contentTitle?: string;
  currency?: string;
  current_category_level?: number;
  current_lang?: string;
  debug?: boolean;
  description?: string;
  filter_type?: string;
  filters?: T;
  isCategoryBanner?: any;
  keywords?: string;
  list: P[];
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
