import { MaApiProductData, MaApiProductAttribute, MaApiProductCustomFlag, MaApiProductImage, MaApiProductTemplate, MaApiProductSize, MaApiProductVariation } from '../api-product';
import { MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../api-common.model';
import { MaApiShopData } from '../api-shop';

// tslint:disable-next-line:no-empty-interface
export interface MaApiSearchItemData extends MaApiProductData<MaApiProductAttribute,
                                                              MaApiProductCustomFlag,
                                                              MaApiProductImage,
                                                              MaApiProductTemplate,
                                                              MaApiShopData,
                                                              MaApiProductSize,
                                                              MaApiProductVariation<MaApiProductAttribute,
                                                                                    MaApiProductImage,
                                                                                    MaApiShopData>
                                                             > { }

export interface MaApiSearchResponse<B extends MaApiBreadcrumbs,
                                     F extends MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>,
                                     S extends MaApiSearchItemData> {
  brand_data?: any;
  brand_id?: number;
  brand_name?: string;
  breadcrumbs?: B[];
  category_data?: any;
  category_name?: string;
  contentTitle?: string;
  currency?: string;
  current_category_level?: number;
  current_lang?: string;
  debug?: boolean;
  description?: string;
  filter_type?: string;
  filters?: F;
  isCategoryBanner?: any;
  keywords?: string;
  list?: S[];
  order?: string;
  page?: string | number;
  pagination_tab?: Object;
  pcategory?: number;
  productData?: any;
  promo?: number;
  pseudo_category?: number;
  require_redirect?: boolean | string;
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
