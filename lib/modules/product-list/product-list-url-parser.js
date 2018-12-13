"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaProductListUrlParser = /** @class */ (function () {
    function MaProductListUrlParser() {
    }
    MaProductListUrlParser.getAttributesFromUrl = function (parameters, index) {
        var attrs = [];
        var i;
        for (i = index.value; i < parameters.length; i++) {
            if (parameters[i][0] === 'b' || parameters[i][0] === 'c') {
                break;
            }
            var attrsTab = parameters[i].split(',');
            var filterGroup = 0, filterId = 0, values = void 0;
            for (var j = 0; j < attrsTab.length; j++) {
                values = attrsTab[j].split('-');
                if (j === 0) {
                    filterGroup = values[1];
                    filterId = values[2];
                }
                else {
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
    };
    MaProductListUrlParser.getBrandsFromUrl = function (parameters, index) {
        var brands = [];
        var value;
        for (var i = index.value; i < parameters.length; i++) {
            if (parameters[i][0] === 'c') {
                break;
            }
            value = parseInt(parameters[i].replace('b-', ''), 10);
            brands.push(value);
        }
        return brands;
    };
    MaProductListUrlParser.getPricesFromUrl = function (parameters, index) {
        var prices = [];
        if (!!parameters[index.value]) {
            var stringValues = parameters[index.value].replace('c-', '');
            prices = stringValues.split(',');
        }
        return prices.length >= 2
            ? { min: prices[0], max: prices[1] }
            : null;
    };
    MaProductListUrlParser.decodeApiFiltersUrl = function (filters) {
        var parameters = filters.split('_'), index = { value: 3 }, attributes = this.getAttributesFromUrl(parameters, index), brands = this.getBrandsFromUrl(parameters, index), prices = this.getPricesFromUrl(parameters, index);
        var options = {
            page: parseInt(parameters[0].replace('p-', ''), 10),
            pageSize: parseInt(parameters[1].replace('r-', ''), 10),
            sortType: parameters[2].replace('o-', ''),
            attributes: attributes,
            brands: brands,
            price: prices
        };
        return options;
    };
    MaProductListUrlParser.parseAttributes = function (attributes) {
        var attrAffix = '/a-';
        var parsedFilters = '', filterGroupId = null;
        attributes.forEach(function (attribute) {
            if (filterGroupId !== attribute.filterGroupId) {
                parsedFilters += "" + attrAffix + attribute.filterGroupId + "-" + attribute.filterId;
            }
            else {
                parsedFilters += "," + attribute.filterId;
            }
            filterGroupId = attribute.filterGroupId;
        });
        return parsedFilters;
    };
    MaProductListUrlParser.parseBrands = function (brands) {
        var affix = '/b-';
        var parsedBrands = '';
        brands.forEach(function (item) {
            parsedBrands += affix + item;
        });
        return parsedBrands;
    };
    MaProductListUrlParser.parsePrices = function (price) {
        return !!price ? "/c-" + price.min + "," + price.max : null;
    };
    MaProductListUrlParser.encodeParsedFiltersUrl = function (url) {
        return url.replace(/\//g, '_');
    };
    MaProductListUrlParser.parseFilterOptions = function (options) {
        var _this = this;
        var parsedUrl = '';
        Object.keys(options).forEach(function (key) {
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
                        parsedUrl += _this.parseAttributes(options[key]);
                    }
                    break;
                case 'brands':
                    if (options[key]) {
                        parsedUrl += _this.parseBrands(options[key]);
                    }
                    break;
                case 'price':
                    if (options[key]) {
                        parsedUrl += _this.parsePrices(options[key]);
                    }
                    break;
            }
        });
        return parsedUrl;
    };
    return MaProductListUrlParser;
}());
exports.MaProductListUrlParser = MaProductListUrlParser;
//# sourceMappingURL=product-list-url-parser.js.map