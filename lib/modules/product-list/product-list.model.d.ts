export declare type MaApiSortType = 'none' | 'nhl' | 'nlh' | 'plh' | 'phl' | 'tlh' | 'thl';
export interface MaProductListOptionsAttribute {
    filterGroupId: string | number;
    filterId: string | number;
}
export interface MaProductListPriceOptions {
    min: string;
    max: string;
}
export interface MaProductListOptions {
    id?: string;
    page?: number;
    pageSize?: number;
    sortType?: MaApiSortType;
    attributes?: MaProductListOptionsAttribute[];
    price?: MaProductListPriceOptions;
    brands?: any;
}
