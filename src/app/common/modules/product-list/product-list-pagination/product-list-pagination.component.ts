import { Component, OnInit, Input } from '@angular/core';

import { MaProductListComponent } from '../product-list.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ma-product-list-pagination',
  template: ``,
  styles: []
})
export class MaProductListPaginationComponent extends MaProductListComponent implements OnInit {
  @Input() totalPages: number;

  page: string;
  currentPage: number;

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.totalPages) {
      throw new Error(('TotalPages must be set'));
    }

    this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(opt => {
      this.currentPage = opt.page;
      this.page = opt.page.toString();
    });
  }

  updateCurrentPage() {
    // tslint:disable-next-line:radix
    const value = parseInt(this.page);

    value > 0 && value <= this.totalPages && value !== this.currentPage
      ? this.productListUtils.updateOptions({ page: value })
      : this.page = this.currentPage.toString();
  }

  decreasePage() {
    this.page = (this.currentPage - 1).toString();

    this.updateCurrentPage();
  }

  increasePage() {
    this.page = (this.currentPage + 1).toString();

    this.updateCurrentPage();
  }
}
