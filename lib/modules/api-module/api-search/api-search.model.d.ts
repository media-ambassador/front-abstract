import { MaApiProductData } from '../api-product';
import { MaApiBreadcrumbs, MaApiFilters } from '../api-common.model';
export interface MaApiSearchItemData extends MaApiProductData {
}
export interface MaApiSearchResponse {
    brand_data: any;
    brand_id: number;
    brand_name: string;
    breadcrumbs: MaApiBreadcrumbs[];
    category_data: any;
    category_name: string;
    contentTitle: string;
    currency: string;
    current_category_level: number;
    current_lang: string;
    debug: boolean;
    description: string;
    filter_type: string;
    filters: MaApiFilters;
    isCategoryBanner: any;
    keywords: string;
    list: MaApiSearchItemData[];
    order: string;
    page: string | number;
    pagination_tab: Object;
    pcategory: number;
    productData: any;
    promo: number;
    pseudo_category: number;
    require_redirect: boolean;
    require_refresh: boolean;
    results: string | number;
    results_on_page: number;
    robots: string;
    sale: number;
    search: string;
    stats: any[];
    t: Object;
    title: string;
    total_pages: number;
    total_results: number;
}
