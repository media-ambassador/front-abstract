import { Dictionary } from '../../models';

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


export interface MaApiPriceCurrency {
  code: string;
  label: string;
}

export interface MaApiPriceDetails<T extends MaApiPriceCurrency> {
  net?: string;
  gross?: string;
  tax?: string;
  tax_percent?: string;
  currency?: T;
}

export interface MaApiPriceInfo<T extends MaApiPriceDetails<MaApiPriceCurrency>> {
  components?: {
    delivery?: T;
    items?: T;
  };
  summary?: T;
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

export interface MaApiFilterAttribute<T extends MaApiFilterAttributesListValue> {
  attribute_display_name?: string;
  attribute_id?: number;
  attribute_name?: string;
  attribute_sort_order?: number;
  attribute_type?: number;
  attribute_use_in_template?: any[];
  attribute_values?: T[];
}

export interface MaApiFilterAttributes<T extends MaApiFilterAttribute<MaApiFilterAttributesListValue>> {
    checked_values_list: Dictionary<string[]>;
    list: Dictionary<T>;
}

export interface MaApiFilters<T extends MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>> {
  attributes: T;
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

