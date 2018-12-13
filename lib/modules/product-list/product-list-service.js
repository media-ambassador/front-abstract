"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var _ = require("lodash");
var MaProductListService = /** @class */ (function () {
    function MaProductListService(opt) {
        if (opt === void 0) { opt = {}; }
        this.defaultOptions = {
            page: 1,
            pageSize: 48,
            sortType: 'nhl',
            attributes: null,
            brands: null,
            price: null
        };
        this.options = Object.assign({}, this.defaultOptions);
        this.optionsSubject$ = new ReplaySubject_1.ReplaySubject(1);
        this.updateOptions(opt);
    }
    MaProductListService.prototype.watchOptions = function () {
        return this.optionsSubject$.asObservable();
    };
    MaProductListService.prototype.updateOptions = function (opt) {
        this.options = _.extend(this.options, opt);
        this.optionsSubject$.next(this.options);
    };
    MaProductListService.prototype.setDefaultOptions = function (id) {
        this.options = Object.assign(this.defaultOptions, { id: id });
        this.optionsSubject$.next(this.options);
    };
    return MaProductListService;
}());
exports.MaProductListService = MaProductListService;
//# sourceMappingURL=product-list-service.js.map