"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaBlockTextComponent = /** @class */ (function () {
    function MaBlockTextComponent() {
    }
    MaBlockTextComponent.prototype.ngOnInit = function () {
    };
    MaBlockTextComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-block-text',
                    template: "\n    <section>\n      {{ content }}\n    </section>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaBlockTextComponent.ctorParameters = function () { return []; };
    MaBlockTextComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaBlockTextComponent;
}());
exports.MaBlockTextComponent = MaBlockTextComponent;
//# sourceMappingURL=block-text.component.js.map