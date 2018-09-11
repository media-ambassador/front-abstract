"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaThreeColumnsTextComponent = /** @class */ (function () {
    function MaThreeColumnsTextComponent() {
    }
    MaThreeColumnsTextComponent.prototype.ngOnInit = function () {
    };
    MaThreeColumnsTextComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ma-three-columns-text',
                    template: "\n    <section>\n      <ma-markup [maHtmlMarkup]=\"content.left\"></ma-markup>\n      <ma-markup [maHtmlMarkup]=\"content.center\"></ma-markup>\n      <ma-markup [maHtmlMarkup]=\"content.right\"></ma-markup>\n    </section>\n  ",
                    styles: ["\n    :host > section {\n      display: flex; }\n      :host > section > div {\n        flex: 1; }\n        :host > section > div:nth-child(2) {\n          margin-right: 15px;\n          margin-left: 15px; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaThreeColumnsTextComponent.ctorParameters = function () { return []; };
    MaThreeColumnsTextComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaThreeColumnsTextComponent;
}());
exports.MaThreeColumnsTextComponent = MaThreeColumnsTextComponent;
//# sourceMappingURL=three-columns-text.component.js.map