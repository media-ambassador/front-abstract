"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var breadcrumbs_component_1 = require("./breadcrumbs.component");
var breadcrumbs_item_directive_1 = require("./breadcrumbs-item.directive");
var MaBreadcrumbsModule = /** @class */ (function () {
    function MaBreadcrumbsModule() {
    }
    MaBreadcrumbsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule
                    ],
                    declarations: [
                        breadcrumbs_component_1.MaBreadcrumbsComponent,
                        breadcrumbs_item_directive_1.MaBreadcrumbsItemDirective,
                    ],
                    exports: [
                        breadcrumbs_component_1.MaBreadcrumbsComponent,
                        breadcrumbs_item_directive_1.MaBreadcrumbsItemDirective
                    ]
                },] },
    ];
    return MaBreadcrumbsModule;
}());
exports.MaBreadcrumbsModule = MaBreadcrumbsModule;
//# sourceMappingURL=breadcrumbs.module.js.map