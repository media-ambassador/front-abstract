"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var breadcrumbs_item_directive_1 = require("./breadcrumbs-item.directive");
/**
 * # Breadcrumbs list
 *
 * Generuje listę breadcrumbsów
 *
 * {@link MaBreadcrumbsItemDirective} - (opcjonalnie) wskazuje custom template
 */
var MaBreadcrumbsComponent = /** @class */ (function () {
    function MaBreadcrumbsComponent() {
    }
    MaBreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    MaBreadcrumbsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-breadcrumbs',
                    template: "\n    <ul class=\"ma-breadcrumbs\">\n      <li class=\"ma-breadcrumbs__item\" *ngFor=\"let item of maItems; let index=index; let first=first; let last=last; let even=even; let odd=odd\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            itemTemplate ? itemTemplate : defaultBreadcrumbsItemTemplate;\n            context: {item: item, index: index, first: first, last: last, odd: odd, even: even}\">\n          </ng-container>\n      </li>\n    </ul>\n    <ng-template\n      #defaultBreadcrumbsItemTemplate\n      let-item=\"item\"\n      let-last=\"last\"\n      let-first=\"first\">\n      <a *ngIf=\"!last\"\n        [ngClass]=\"{'ma-breadcrumbs__item--first': first}\" [routerLink]=\"[item.link]\">{{item.name}}</a>\n      <span *ngIf=\"last\" [ngClass]=\"{'ma-breadcrumbs__item--last': last}\" href=\"javascript: return void\">{{item.name}}</span>\n    </ng-template>\n  ",
                },] },
    ];
    /** @nocollapse */
    MaBreadcrumbsComponent.ctorParameters = function () { return []; };
    MaBreadcrumbsComponent.propDecorators = {
        "maItems": [{ type: core_2.Input },],
        "itemTemplate": [{ type: core_1.ContentChild, args: [breadcrumbs_item_directive_1.MaBreadcrumbsItemDirective, { read: core_3.TemplateRef },] },],
    };
    return MaBreadcrumbsComponent;
}());
exports.MaBreadcrumbsComponent = MaBreadcrumbsComponent;
//# sourceMappingURL=breadcrumbs.component.js.map