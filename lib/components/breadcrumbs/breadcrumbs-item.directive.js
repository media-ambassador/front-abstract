"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Wskazuje template do użycia
 *
 * zmienne (context) przekazywane do template:
 *
 * ($implicit: item), index, first, last, odd, even
 *
 */
var MaBreadcrumbsItemDirective = /** @class */ (function () {
    function MaBreadcrumbsItemDirective() {
    }
    MaBreadcrumbsItemDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maBreadcrumbsItem]'
                },] },
    ];
    /** @nocollapse */
    MaBreadcrumbsItemDirective.ctorParameters = function () { return []; };
    return MaBreadcrumbsItemDirective;
}());
exports.MaBreadcrumbsItemDirective = MaBreadcrumbsItemDirective;
//# sourceMappingURL=breadcrumbs-item.directive.js.map