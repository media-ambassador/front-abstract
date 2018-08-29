import { Dictionary } from 'lodash';

export const MaApiModuleConfigKey = 'maApiModuleConfig';

export interface MaApiModuleConfig {
  api: string;
  cookieSessionToken?: string;
  headerSessionToken?: string;
}

export interface MaApiResponse {
  action_status: boolean;
  message: string;
  message_vars: any[];
  data: any;
}

export interface MaApiSeo {
  description?: string;
  keywords?: string;
  nofollow?: string;
  noindex?: string;
  title?: string;
  url?: string;
}


export interface MaApiPriceCurrency {
  code: string;
  label: string;
}

export interface MaApiPriceDetails {
  net?: string;
  gross?: string;
  tax?: string;
  tax_percent?: string;
  currency?: MaApiPriceCurrency;
}

export interface MaApiPriceInfo {
  components?: {
    delivery?: MaApiPriceDetails;
    items?: MaApiPriceDetails;
  };
  summary?: MaApiPriceDetails;
}

export interface MaApiBreadcrumbs {
  category_id: string | number;
  category_name: string;
  slug_name?: string;
}

export interface MaApiFilterAttributesListValue {
  attribute_value_id?: string;
  attribute_value_sort_order?: number;
  attribute_value_name?: string;
  attribute_value_name_to_sort?: string;
  attribute_value_url?: string;
}

export interface MaApiFilterAttribute {
  attribute_display_name?: string;
  attribute_id?: number;
  attribute_name?: string;
  attribute_sort_order?: number;
  attribute_type?: number;
  attribute_use_in_template?: any[];
  attribute_values?: MaApiFilterAttributesListValue[];
}

export interface MaApiFilterAttributes {
    checked_values_list: Dictionary<string[]>;
    list: Dictionary<MaApiFilterAttribute>;
}

export interface MaApiFilters {
  attributes: MaApiFilterAttributes;
  brands: {
    checked_values_list: any[];
    list: any;
  };
  main_categories: {
    checked_values_list: any[];
    list: any
  };
  prices: {
    checked_list: number[];
    checked_values_list: any;
    list: number[];
  };
  subcategories: {
    checked_values_list: any;
    list: any;
  };
}

export interface MaApiFbLoginResponse {
  action_status: boolean;
  status: string;
  authResponse: {
      accessToken: string;
      expiresIn: string;
      signedRequest: string;
      userID: string;
  };
}

