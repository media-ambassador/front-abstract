"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaImageComponent = /** @class */ (function () {
    function MaImageComponent() {
    }
    MaImageComponent.prototype.ngOnInit = function () {
    };
    MaImageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-image',
                    template: "\n    <section>\n      <figure>\n        <img src=\"{{ content.image.url }}\" alt=\"{{ content.image.alt }}\">\n      </figure>\n    </section>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaImageComponent.ctorParameters = function () { return []; };
    MaImageComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaImageComponent;
}());
exports.MaImageComponent = MaImageComponent;
//# sourceMappingURL=image.component.js.map