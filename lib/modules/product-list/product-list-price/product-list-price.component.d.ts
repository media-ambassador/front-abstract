import { OnInit, OnChanges } from '@angular/core';
import { MaProductListComponent } from '../product-list.component';
export declare class MaProductListPriceComponent extends MaProductListComponent implements OnInit, OnChanges {
    priceChecked: number[];
    priceList: number[];
    selectedMinPrice: string;
    selectedMaxPrice: string;
    minPrice: number;
    maxPrice: number;
    private price;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    setMinPrice(value: string): void;
    setMaxPrice(value: string): void;
    setPrice(min: number, max: number): void;
    updateCurrentPrice(): void;
}
