"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaTextImageComponent = /** @class */ (function () {
    function MaTextImageComponent() {
    }
    MaTextImageComponent.prototype.ngOnInit = function () {
    };
    MaTextImageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-text-image',
                    template: "\n    <section>\n      <ma-markup [maHtmlMarkup]=\"content.left\"></ma-markup>\n\n      <figure>\n        <img src=\"{{ content.image.url }}\" alt=\"{{ content.image.alt }}\">\n      </figure>\n    </section>\n  ",
                    styles: ["\n    :host > section {\n      display: flex; }\n      :host > section > ma-markup {\n        flex: 1;\n        margin-right: 15px; }\n      :host > section > figure {\n        flex: 1;\n        margin-left: 15px; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaTextImageComponent.ctorParameters = function () { return []; };
    MaTextImageComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaTextImageComponent;
}());
exports.MaTextImageComponent = MaTextImageComponent;
//# sourceMappingURL=text-image.component.js.map