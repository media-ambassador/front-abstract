"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaQuoteComponent = /** @class */ (function () {
    function MaQuoteComponent() {
    }
    MaQuoteComponent.prototype.ngOnInit = function () {
    };
    MaQuoteComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-quote',
                    template: "\n    <section>\n      <div class=\"quote\" [innerHTML]=\"content | safeHtml\"></div>\n    </section>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaQuoteComponent.ctorParameters = function () { return []; };
    MaQuoteComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaQuoteComponent;
}());
exports.MaQuoteComponent = MaQuoteComponent;
//# sourceMappingURL=quote.component.js.map