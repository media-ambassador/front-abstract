"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaYouTubeComponent = /** @class */ (function () {
    function MaYouTubeComponent() {
    }
    MaYouTubeComponent.prototype.ngOnInit = function () {
    };
    MaYouTubeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-youtube',
                    template: "\n    <section>\n\n      <iframe *ngIf=\"content\"\n              type=\"text/html\"\n              src=\"http://www.youtube.com/embed/{{ content }}\"\n              frameborder=\"0\">\n      </iframe>\n\n    </section>\n  ",
                    styles: ["\n    :host > section iframe {\n      width: 100%;\n      height: 450px; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaYouTubeComponent.ctorParameters = function () { return []; };
    MaYouTubeComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaYouTubeComponent;
}());
exports.MaYouTubeComponent = MaYouTubeComponent;
//# sourceMappingURL=youtube.component.js.map