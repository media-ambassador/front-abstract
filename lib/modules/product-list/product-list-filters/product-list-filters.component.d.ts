import { OnInit } from '@angular/core';
import { MaProductListComponent } from '../product-list.component';
import { MaProductListOptionsAttribute, MaProductListPriceOptions } from '../product-list.model';
import { MaApiFilters, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../../api-module';
export declare class MaProductListFiltersComponent extends MaProductListComponent implements OnInit {
    filters: MaApiFilters;
    activeAttributes: MaProductListOptionsAttribute[];
    price: MaProductListPriceOptions;
    constructor();
    ngOnInit(): void;
    getAttributeId(attribute: MaApiFilterAttribute, attributeValue: MaApiFilterAttributesListValue): string;
    hasFilters(attribute: MaApiFilterAttribute): boolean;
    filtersTotalCount(): number;
    countFilters(attribute: MaApiFilterAttribute): number;
    isAttributeActive(attribute: MaApiFilterAttribute, attrItem: MaApiFilterAttributesListValue): boolean;
    onAttributeChange(attribute: MaApiFilterAttribute, attrItem: MaApiFilterAttributesListValue): void;
    clearAllFilters(): void;
    clearAttributeFilters(attribute: MaApiFilterAttribute): void;
    protected updateAttributes(): void;
}
