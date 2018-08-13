import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MaProductListService } from './product-list-service';

@Component({
  selector: 'bs-product-list',
  template: ``,
  styles: []
})
export class MaProductListComponent implements OnInit, OnDestroy {
  @Input() productListUtils: MaProductListService;

  protected productListOptionSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    if (!this.productListUtils) {
      throw new Error(('ProductListUtils must be set'));
    }
  }

  ngOnDestroy(): void {
    if (!!this.productListOptionSubscription) {
      this.productListOptionSubscription.unsubscribe();
    }
  }

}
