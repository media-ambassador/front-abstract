import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaProductListComponent } from './product-list.component';
import { MaProductListFiltersComponent } from './product-list-filters/product-list-filters.component';
import { MaProductListPageSizeComponent } from './product-list-page-size/product-list-page-size.component';
import { MaProductListPaginationComponent } from './product-list-pagination/product-list-pagination.component';
import { MaProductListSortOptionsComponent } from './product-list-sort-options/product-list-sort-options.component';
import { MaProductListPriceComponent } from './product-list-price/product-list-price.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaProductListComponent,
    MaProductListFiltersComponent,
    MaProductListPageSizeComponent,
    MaProductListPaginationComponent,
    MaProductListSortOptionsComponent,
    MaProductListPriceComponent
  ],
  exports: [
    MaProductListComponent,
    MaProductListFiltersComponent,
    MaProductListPageSizeComponent,
    MaProductListPaginationComponent,
    MaProductListSortOptionsComponent,
    MaProductListPriceComponent
  ]
})
export class MaProductListModule { }
