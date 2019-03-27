import { Component, OnInit, Input } from '@angular/core';
import forEach from 'lodash/forEach';
import remove from 'lodash/remove';
import sortBy from 'lodash/sortBy';

import { MaProductListComponent } from '../product-list.component';
import { MaProductListOptionsAttribute, MaProductListPriceOptions } from '../product-list.model';
import {
  MaApiFilters,
  MaApiFilterAttribute,
  MaApiFilterAttributesListValue
} from '../../api-module';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ma-product-list-filters',
  template: ``,
  styles: []
})
export class MaProductListFiltersComponent extends MaProductListComponent implements OnInit {
  @Input() filters: MaApiFilters<any>;

  public activeAttributes: MaProductListOptionsAttribute[];
  public price: MaProductListPriceOptions;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(opt => {
      this.activeAttributes = !!opt.attributes ? opt.attributes : [];
      this.price = opt.price;
    });
  }

  getAttributeId(attribute: MaApiFilterAttribute<any>, attributeValue: MaApiFilterAttributesListValue) {
    return 'attr-' + attribute.attribute_id + '-' + attributeValue.attribute_value_id;
  }

  hasFilters(attribute: MaApiFilterAttribute<any>) {
    return !!this.filters.attributes.checked_values_list[attribute.attribute_id];
  }

  filtersTotalCount(): number {
    let totalCount = 0;
    forEach(this.filters.attributes.checked_values_list, filtersList => {
      totalCount += filtersList.length;
    });

    return totalCount;
  }

  countFilters(attribute: MaApiFilterAttribute<any>) {
    const filters: string[] = this.filters.attributes.checked_values_list[attribute.attribute_id];

    return filters ? filters.length : 0;
  }

  isAttributeActive(attribute: MaApiFilterAttribute<any>, attrItem: MaApiFilterAttributesListValue): boolean {
    const filters: string[] = this.filters.attributes.checked_values_list[attribute.attribute_id];

    if (!filters) {
      return false;
    }

    return filters.indexOf(attrItem.attribute_value_id) >= 0;
  }

  onAttributeChange(attribute: MaApiFilterAttribute<any>, attrItem: MaApiFilterAttributesListValue) {
    const isActive = this.isAttributeActive(attribute, attrItem);

    if (isActive) {
      remove(this.activeAttributes, item => {

        return item.filterGroupId === attribute.attribute_id.toString()
               && item.filterId === attrItem.attribute_value_id;
      });
    } else {
      this.activeAttributes.push({
        filterGroupId: attribute.attribute_id.toString(),
        filterId: attrItem.attribute_value_id
      });
    }

    this.updateAttributes();
  }

  clearAllFilters() {
    this.activeAttributes = null;
    this.price = null;

    this.updateAttributes();
  }

  clearAttributeFilters(attribute: MaApiFilterAttribute<any>) {
    remove(this.activeAttributes, item => {
      return item.filterGroupId === attribute.attribute_id.toString();
    });

    this.updateAttributes();
  }

  protected updateAttributes() {
    let attributes = null;

    if (!!this.filters.attributes) {
      attributes = sortBy(this.activeAttributes, attribute => {
        return attribute.filterGroupId;
      });
    }

    this.productListUtils.updateOptions({
      attributes: attributes,
      price: this.price
    });
  }
}
