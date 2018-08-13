import { Component, OnInit, Input } from '@angular/core';

import { MaProductListComponent } from '../product-list.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ma-product-list-page-size',
  template: ` `,
  styles: []
})
export class MaProductListPageSizeComponent extends MaProductListComponent implements OnInit {
  @Input() pageSizeOptions: number[];

  selectedPageSize: string;

  private pageSize: number;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    if (!this.pageSizeOptions) {
      this.setDefaultOptions();
    }

    this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(opt => {
      this.pageSize = opt.pageSize;
      this.selectedPageSize = this.pageSize.toString();
    });
  }

  setDefaultOptions() {
    this.pageSizeOptions = [12, 24, 48, 96];
  }

  updateCurrentPageSize() {
    this.productListUtils.updateOptions({
      page: 1,
      // tslint:disable-next-line:radix
      pageSize: parseInt(this.selectedPageSize)
    });
  }

}
