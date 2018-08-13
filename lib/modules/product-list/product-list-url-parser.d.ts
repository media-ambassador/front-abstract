import { MaProductListOptions, MaProductListPriceOptions } from './product-list.model';
export declare class MaProductListUrlParser {
    static getAttributesFromUrl(parameters: any, index: any): {
        filterGroupId: number;
        filterId: number;
    }[];
    static getBrandsFromUrl(parameters: any, index: any): number[];
    static getPricesFromUrl(parameters: any, index: any): MaProductListPriceOptions;
    static decodeApiFiltersUrl(filters: string): MaProductListOptions;
    static parseAttributes(attributes: any): string;
    static parseBrands(brands: any): string;
    static parsePrices(price: MaProductListPriceOptions): string;
    static encodeParsedFiltersUrl(url: string): string;
    static parseFilterOptions(options: any): string;
}
