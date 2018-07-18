"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaTwoColumnsTextComponent = /** @class */ (function () {
    function MaTwoColumnsTextComponent() {
    }
    MaTwoColumnsTextComponent.prototype.ngOnInit = function () {
    };
    MaTwoColumnsTextComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ma-two-columns-text',
                    template: "\n    <section>\n      <div>\n        {{ content.left }}\n      </div>\n      <div>\n        {{ content.right }}\n      </div>\n    </section>\n  ",
                    styles: ["\n    :host > section {\n      display: flex; }\n      :host > section > div {\n        flex: 1; }\n        :host > section > div:nth-child(1) {\n          margin-right: 15px; }\n        :host > section > div:nth-child(2) {\n          margin-left: 15px; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaTwoColumnsTextComponent.ctorParameters = function () { return []; };
    MaTwoColumnsTextComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaTwoColumnsTextComponent;
}());
exports.MaTwoColumnsTextComponent = MaTwoColumnsTextComponent;
//# sourceMappingURL=two-columns-text.component.js.map