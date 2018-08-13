import { OnInit } from '@angular/core';
import { MaProductListComponent } from '../product-list.component';
import { MaApiSortType } from '../product-list.model';
export declare class MaProductListSortOptionsComponent extends MaProductListComponent implements OnInit {
    sortTypes: MaApiSortType[];
    selectedSortType: MaApiSortType;
    constructor();
    ngOnInit(): void;
    setDefaultSortTypes(): void;
    updateCurrentSortType(): void;
}
