"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var Observable_1 = require("rxjs/Observable");
var tap_1 = require("rxjs/operators/tap");
require("rxjs/add/observable/of");
var api_search_1 = require("../../modules/api-module/api-search");
var MaSearchService = /** @class */ (function () {
    function MaSearchService(apiSearchService) {
        this.apiSearchService = apiSearchService;
        this.isProcessing = false;
        this.searchingProcessing$ = new ReplaySubject_1.ReplaySubject(1);
    }
    MaSearchService.prototype.watchSearchProcessing = function () {
        return this.searchingProcessing$.asObservable();
    };
    MaSearchService.prototype.search = function (query, filters) {
        var _this = this;
        if (this.isProcessing) {
            return Observable_1.Observable.of(null);
        }
        this.searchingProcessing$.next(true);
        return this.apiSearchService.search(query, filters).pipe(tap_1.tap(function () { return _this.searchingProcessing$.next(false); }));
    };
    MaSearchService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaSearchService.ctorParameters = function () { return [
        { type: api_search_1.MaApiSearchService, },
    ]; };
    return MaSearchService;
}());
exports.MaSearchService = MaSearchService;
//# sourceMappingURL=search.service.js.map