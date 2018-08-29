import { OnInit, OnChanges } from '@angular/core';
import { MaProductListPriceOptions } from '../product-list.model';
import { MaProductListComponent } from '../product-list.component';
export declare class MaProductListPriceComponent extends MaProductListComponent implements OnInit, OnChanges {
    priceChecked: number[];
    priceList: number[];
    selectedMinPrice: string;
    selectedMaxPrice: string;
    minPrice: number;
    maxPrice: number;
    protected price: MaProductListPriceOptions;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    setMinPrice(value: string): void;
    setMaxPrice(value: string): void;
    setPrice(min: number, max: number): void;
    updateCurrentPrice(): void;
}
