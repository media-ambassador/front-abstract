import { MaProductListOptions, MaApiSortType, MaProductListPriceOptions } from './product-list.model';

export class MaProductListUrlParser {

  static getAttributesFromUrl(parameters: any, index: any) {
    const attrs = [];
    let i;

    for (i = index.value; i < parameters.length; i++ ) {
      if (parameters[i][0] === 'b' || parameters[i][0] === 'c') {
        break;
      }

      const attrsTab = parameters[i].split(',');
      let filterGroup = 0,
          filterId = 0,
          values;

      for (let j = 0; j < attrsTab.length; j++) {
        values = attrsTab[j].split('-');

        if (j === 0) {
          filterGroup = values[1];
          filterId = values[2];
        } else {
          filterId = values[0];
        }

        attrs.push({
          filterGroupId: filterGroup,
          filterId: filterId
        });
      }
    }

    index.value = i;
    return attrs;
  }

  static getBrandsFromUrl(parameters: any, index: any) {
    const brands = [];
    let value;

    for (let i = index.value; i < parameters.length; i++ ) {
      if (parameters[i][0] === 'c') {
        break;
      }

      value = parseInt(parameters[i].replace('b-', ''), 10);
      brands.push(value);
    }

    return brands;
  }

  static getPricesFromUrl(parameters: any, index: any): MaProductListPriceOptions {
    let prices = [];

    if (!!parameters[index.value]) {
      const stringValues = parameters[index.value].replace('c-', '');
      prices = stringValues.split(',');
    }

    return prices.length >= 2
           ? { min: prices[0], max: prices[1] }
           : null;
  }

  static decodeApiFiltersUrl(filters: string): MaProductListOptions {
    const parameters = filters.split('_'),
          index = { value: 3 },
          attributes = this.getAttributesFromUrl(parameters, index),
          brands = this.getBrandsFromUrl(parameters, index),
          prices = this.getPricesFromUrl(parameters, index);

    const options: MaProductListOptions = {
      page: parseInt(parameters[0].replace('p-', ''), 10),
      pageSize: parseInt(parameters[1].replace('r-', ''), 10),
      sortType: parameters[2].replace('o-', '') as MaApiSortType,
      attributes: attributes,
      brands: brands,
      price: prices
    };

    return options;
  }

  static parseAttributes(attributes: any) {
    const attrAffix = '/a-';
    let parsedFilters = '',
        filterGroupId: string = null;

    attributes.forEach((attribute: any) => {

      if (filterGroupId !== attribute.filterGroupId) {
        parsedFilters += `${attrAffix}${attribute.filterGroupId}-${attribute.filterId}`;
      } else {
        parsedFilters += `,${attribute.filterId}`;
      }

      filterGroupId = attribute.filterGroupId;
    });

    return parsedFilters;
  }

  static parseBrands(brands: any) {
    const affix = '/b-';
    let parsedBrands = '';

    brands.forEach((item: any) => {
      parsedBrands += affix + item;
    });

    return parsedBrands;
  }


  static parsePrices(price: MaProductListPriceOptions): string {
    return !!price ? `/c-${price.min},${price.max}` : null;
  }

  static encodeParsedFiltersUrl(url: string): string {
    return url.replace(/\//g, '_');
  }

  static parseFilterOptions(options: any): string {
    let parsedUrl = '';

    Object.keys(options).forEach((key: any) => {
      switch (key) {
        case 'page':
          parsedUrl += 'p-' + options[key] + '/';

          break;
        case 'pageSize':
          parsedUrl += 'r-' + options[key] + '/';

          break;
        case 'query':
          parsedUrl += 'q-' + options[key] + '/';

          break;
        case 'sortType':
          parsedUrl += 'o-' + options[key];

          break;
        case 'attributes':
          if (options[key]) {
            parsedUrl += this.parseAttributes(options[key]);
          }

          break;
        case 'brands':
          if (options[key]) {
            parsedUrl += this.parseBrands(options[key]);
          }

          break;
        case 'price':
          if (options[key]) {
            parsedUrl += this.parsePrices(options[key]);
          }

          break;
      }
    });

    return parsedUrl;
  }

}
