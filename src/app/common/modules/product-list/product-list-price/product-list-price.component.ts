import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MaProductListPriceOptions } from '../product-list.model';
import { MaProductListComponent } from '../product-list.component';

@Component({
  selector: 'bs-product-list-price',
  template: '',
  styleUrls: []
})
export class MaProductListPriceComponent extends MaProductListComponent implements OnInit, OnChanges {
  @Input() priceChecked: number[];
  @Input() priceList: number[];

  selectedMinPrice = '';
  selectedMaxPrice = '';

  minPrice: number;
  maxPrice: number;

  private price: MaProductListPriceOptions;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnChanges() {
    if (!!this.priceChecked && this.priceChecked.length >= 2) {
      this.selectedMinPrice = this.priceChecked[0].toString();
      this.selectedMaxPrice = this.priceChecked[1].toString();
    }

    if (!!this.priceList && this.priceList.length >= 2) {
      this.minPrice = this.priceList[0];
      this.maxPrice = this.priceList[1];
    }

    let isPriceValid = true;

    if (this.priceChecked[0] < this.priceList[0]) {
      this.selectedMinPrice = this.minPrice.toString();
      isPriceValid = false;
    }

    if (this.priceChecked[1] > this.priceList[1]) {
      this.selectedMaxPrice = this.maxPrice.toString();
      isPriceValid = false;
    }

    this.price = {
      min: this.selectedMinPrice,
      max: this.selectedMaxPrice
    };

    if (!isPriceValid) {
      this.updateCurrentPrice();
    }
  }

  setMinPrice(value: string) {
    if (!value) {
      return;
    }

    let minValue = parseInt(value, 10);

    if (minValue < this.minPrice) {
      minValue = this.minPrice;
    } else if (minValue >= this.maxPrice) {
      minValue = this.maxPrice - 1;
    }

    this.selectedMinPrice = minValue.toString();
    this.price.min = minValue.toString();

    this.updateCurrentPrice();
  }

  setMaxPrice(value: string) {
    if (!value) {
      return;
    }

    let maxValue = parseInt(value, 10);

    if (maxValue > this.maxPrice) {
      maxValue = this.maxPrice;
    } else if (maxValue <= parseInt(this.selectedMinPrice, 10)) {
      maxValue = parseInt(this.selectedMinPrice, 10) + 1;
    }

    this.selectedMinPrice = maxValue.toString();
    this.price.max = maxValue.toString();

    this.updateCurrentPrice();
  }

  setPrice(min: number, max: number) {
    this.selectedMinPrice = this.maxPrice === min ? (this.maxPrice - 1).toString() : min.toString();
    this.selectedMaxPrice = this.minPrice === max ? (this.minPrice + 1).toString() : max.toString();

    this.price = {
      min: this.selectedMinPrice,
      max: this.selectedMaxPrice,
    };

    this.updateCurrentPrice();
  }

  updateCurrentPrice() {
    this.productListUtils.updateOptions({
      page: 1,
      price: this.price
    });
  }

}
