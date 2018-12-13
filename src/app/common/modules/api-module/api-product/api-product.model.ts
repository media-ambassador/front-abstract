import { MaApiPriceInfo, MaApiPriceDetails, MaApiBreadcrumbs, MaApiPriceCurrency } from '../api-common.model';
import { MaApiShopData } from '../api-shop/api-shop.model';
import { Dictionary } from '../../../models';

export interface MaApiProductResponse<B extends MaApiBreadcrumbs,
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
  breadcrumbs?: B[];
  description?: string;
  filter_type?: any;
  image?: any;
  keywords?: string[];
  list?: any[];
  productData?: P;
  stats?: any;
  title?: string;
}

export interface MaApiProductImage {
  image_id?: string;
  image_is_primary?: boolean;
  image_full?: string;
  image_middle?: string;
  image_thumb?: string;
  image_micro?: string;
  image_normal?: string;
}

export interface MaApiProductAttribute {
  code?: string;
  attribute_id?: string;
  attribute_name?: string;
  attribute_value?: string;
  attribute_value_id?: string;
  display_name?: string;
  variation_id?: string;
}

export interface MaApiProductVariation<PA extends MaApiProductAttribute, PI extends MaApiProductImage, S extends MaApiShopData> {
  attributes?: PA[];
  color?: PA;
  display_name?: string;
  images?: PI[];
  is_def_variation?: string;
  price_current?: string;
  price_regular?: string;
  size?: PA;
  slug_name?: string;
  variation_id?: number | string;
  salons?: S[];
}

export interface MaApiProductTemplate {
  id?: string;
  name?: string;
  group_type?: string;
  groupby_item_id?: string;
  timestamp?: string;
  image1?: string;
  mimetype1?: string;
  group_select_id?: string;
  slug?: string;
}

export interface MaApiProductSize {
  attribute_id?: string;
  attribute_name?: string;
  attribute_value?: string;
  attribute_value_id?: string;
  display_name?: string;
  sortValue?: number;
  variation_id?: string;
  inventory?: number;
}

export interface MaApiProductCustomFlag {
  background?: string;
  font?: string;
  text?: string;
}

export interface MaApiProductData<PA extends MaApiProductAttribute,
                                  PF extends MaApiProductCustomFlag,
                                  PI extends MaApiProductImage,
                                  PT extends MaApiProductTemplate,
                                  PS extends MaApiShopData,
                                  PSI extends MaApiProductSize,
                                  PV extends MaApiProductVariation<PA, PI, PS>,
                                  > {
  active?: boolean;
  brand_id?: number;
  brand_url?: string;
  categories?: any[];
  category_id?: number | string;
  category_name?: string;
  category_pick_size_info?: string;
  color?: PA;
  colors?: any;
  display_name?: string;
  customFlags?: PF;
  images?: PI[];
  link?: string;
  template?: PT;
  longdescription?: string;
  model_variations?: PV[];
  nextLink?: string;
  prevLink?: string;
  next_slug_name?: string;
  prev_slug_name?: string;
  price_current?: string | number;
  price_regular?: string | number;
  product_id?: number;
  product_code?: string;
  related_products?: any[];
  shortdescription?: string;
  sposob_konserwacji?: string;
  size?: PA;
  salons?: PS[];
  sizechart_id?: number;
  sizetable?: string[][];
  sizes?: Dictionary<PSI>;
  sku?: string;
  flag_announcement?: boolean;
  available_from?: string;
  slug_name?: string;
  v_flag_new?: boolean;
  v_flag_sale?: boolean;
  variation_id?: number | string;
}

export interface MaApiProductPrice<T extends MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>> {
  regular?: T;
  final?: T;
}

export interface MaApiProductDiscount<T extends MaApiPriceDetails<MaApiPriceCurrency>> {
  components?: [
    {
      name?: string;
      type?: string;
      value?: {
        unit?: T;
        total?: T;
      };
    }
  ];
  summary?: {
    value?: T;
  };
  value?: {
    total?: T;
    unit?: T;
  };
}

export interface MaApiProductAttributeList<PA extends MaApiProductAttribute> {
  attributes?: PA[];
  sizes?: Dictionary<PA>;
}
