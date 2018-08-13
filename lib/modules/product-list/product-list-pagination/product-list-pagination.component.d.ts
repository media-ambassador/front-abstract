import { OnInit } from '@angular/core';
import { MaProductListComponent } from '../product-list.component';
export declare class MaProductListPaginationComponent extends MaProductListComponent implements OnInit {
    totalPages: number;
    page: string;
    currentPage: number;
    constructor();
    ngOnInit(): void;
    updateCurrentPage(): void;
    decreasePage(): void;
    increasePage(): void;
}
