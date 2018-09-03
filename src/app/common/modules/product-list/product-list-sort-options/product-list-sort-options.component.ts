import { Component, OnInit, Input } from '@angular/core';
import { MaProductListComponent } from '../product-list.component';
import { MaApiSortType } from '../product-list.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ma-product-list-sort-options',
  template: ``,
  styles: []
})
export class MaProductListSortOptionsComponent extends MaProductListComponent implements OnInit {
  @Input() sortTypes: MaApiSortType[];

  selectedSortType: MaApiSortType;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    if (!this.sortTypes) {
      this.setDefaultSortTypes();
    }

    this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(opt => {
      this.selectedSortType = opt.sortType;
    });
  }

  setDefaultSortTypes() {
    this.sortTypes = ['nhl', 'nlh', 'plh', 'phl', 'tlh', 'thl'];
  }

  changeSortType(type: MaApiSortType) {
    this.selectedSortType = type;
    this.updateCurrentSortType();
  }

  updateCurrentSortType() {
    this.productListUtils.updateOptions({ sortType: this.selectedSortType });
  }

}
