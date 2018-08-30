import { MaApiPriceInfo, MaApiPriceDetails, MaApiBreadcrumbs } from '../api-common.model';
import { Dictionary } from 'lodash';

export interface MaApiProductResponse {
  breadcrumbs: MaApiBreadcrumbs[];
  description: string;
  filter_type: any;
  image: any;
  keywords: string[];
  list: any[];
  productData: MaApiProductData;
  stats: any;
  title: string;
}

export interface MaApiProductImage {
  image_id: string;
  image_is_primary: boolean;
  image_full: string;
  image_middle?: string;
  image_thumb?: string;
  image_micro?: string;
  image_normal?: string;
}

export interface MaApiProductAttribute {
  attribute_id?: string;
  attribute_name?: string;
  attribute_value?: string;
  attribute_value_id?: string;
  display_name?: string;
}

export interface MaApiProductVariation {
  attributes?: MaApiProductAttribute[];
  color?: MaApiProductAttribute;
  display_name?: string;
  images?: MaApiProductImage[];
  is_def_variation?: string;
  price_current?: string;
  price_regular?: string;
  size?: MaApiProductAttribute;
  slug_name?: string;
  variation_id?: number | string;
}

export interface MaApiProductTemplate {
  id: string;
  name: string;
  group_type: string;
  groupby_item_id: string;
  timestamp: string;
  image1: string;
  mimetype1: string;
  group_select_id: string;
  slug: string;
}

export interface MaApiProductSize {
  attribute_id: string;
  attribute_name: string;
  attribute_value: string;
  attribute_value_id: string;
  display_name: string;
  sortValue: number;
  variation_id: string;
}

export interface MaApiProductData {
  active?: boolean;
  brand_id: number;
  brand_url?: string;
  categories?: any[];
  category_id?: number | string;
  category_name: string;
  category_pick_size_info?: string;
  color?: MaApiProductAttribute;
  colors?: any;
  display_name: string;
  images: MaApiProductImage[];
  link?: string;
  template?: MaApiProductTemplate;
  longdescription?: string;
  model_variations: MaApiProductVariation[];
  nextLink?: string;
  prevLink?: string;
  price_current?: string | number;
  price_regular: string | number;
  product_id: number;
  related_products?: any[];
  shortdescription?: string;
  sposob_konserwacji?: string;
  size?: MaApiProductAttribute;
  sizechart_id?: number;
  sizetable?: string[][];
  sizes?: Dictionary<MaApiProductSize>;
  sku?: string;
  slug_name: string;
  v_flag_new?: boolean;
  v_flag_sale?: boolean;
  variation_id: number | string;
}

export interface MaApiProductPrice {
  regular: MaApiPriceInfo;
  final: MaApiPriceInfo;
}

export interface MaApiProductDiscount {
  components?: [
    {
      name: string;
      type: string;
      value: {
        unit: MaApiPriceDetails;
        total: MaApiPriceDetails;
      };
    }
  ];
  summary?: {
    value?: MaApiPriceDetails;
  };
  value?: {
    total: MaApiPriceDetails;
    unit: MaApiPriceDetails;
  };
}
