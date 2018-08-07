"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaImageTextComponent = /** @class */ (function () {
    function MaImageTextComponent() {
    }
    MaImageTextComponent.prototype.ngOnInit = function () {
    };
    MaImageTextComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-image-text',
                    template: "\n    <section>\n      <figure>\n        <img src=\"{{ content.image.url }}\" alt=\"{{ content.image.alt }}\">\n      </figure>\n\n      <div [innerHTML]=\"content.right\"></div>\n    </section>\n  ",
                    styles: ["\n    :host > section {\n      display: flex; }\n      :host > section > div {\n        flex: 1; }\n        :host > section > div:nth-child(1) {\n          margin-right: 15px; }\n        :host > section > div:nth-child(2) {\n          margin-left: 15px; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaImageTextComponent.ctorParameters = function () { return []; };
    MaImageTextComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaImageTextComponent;
}());
exports.MaImageTextComponent = MaImageTextComponent;
//# sourceMappingURL=image-text.component.js.map