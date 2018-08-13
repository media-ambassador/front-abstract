import { OnInit } from '@angular/core';
import { MaProductListComponent } from '../product-list.component';
export declare class MaProductListPageSizeComponent extends MaProductListComponent implements OnInit {
    pageSizeOptions: number[];
    selectedPageSize: string;
    private pageSize;
    constructor();
    ngOnInit(): void;
    setDefaultOptions(): void;
    updateCurrentPageSize(): void;
}
