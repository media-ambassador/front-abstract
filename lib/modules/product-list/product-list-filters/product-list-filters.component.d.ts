import { OnInit } from '@angular/core';
import { MaProductListComponent } from '../product-list.component';
import { MaProductListOptionsAttribute, MaProductListPriceOptions } from '../product-list.model';
import { MaApiFilters, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../../api-module';
export declare class MaProductListFiltersComponent extends MaProductListComponent implements OnInit {
    filters: MaApiFilters<any>;
    activeAttributes: MaProductListOptionsAttribute[];
    price: MaProductListPriceOptions;
    constructor();
    ngOnInit(): void;
    getAttributeId(attribute: MaApiFilterAttribute<any>, attributeValue: MaApiFilterAttributesListValue): string;
    hasFilters(attribute: MaApiFilterAttribute<any>): boolean;
    filtersTotalCount(): number;
    countFilters(attribute: MaApiFilterAttribute<any>): number;
    isAttributeActive(attribute: MaApiFilterAttribute<any>, attrItem: MaApiFilterAttributesListValue): boolean;
    onAttributeChange(attribute: MaApiFilterAttribute<any>, attrItem: MaApiFilterAttributesListValue): void;
    clearAllFilters(): void;
    clearAttributeFilters(attribute: MaApiFilterAttribute<any>): void;
    protected updateAttributes(): void;
}
