"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * # MarkupComponent
 *
 * Umożliwia wstawienie markupu HTML bezpośrednio do kodu strony.
 * Usuwa tag &lt;script&gt;.
 */
var MaMarkupComponent = /** @class */ (function () {
    function MaMarkupComponent() {
        this.inited = false;
        this._innerHtml = '';
    }
    Object.defineProperty(MaMarkupComponent.prototype, "maHtmlMarkup", {
        set: /** Kod HTML do umieszczenia w innerHTML */
        function (markup) {
            if (this.inited) {
                this.innerHtml = markup;
            }
            this._innerHtml = markup;
        },
        enumerable: true,
        configurable: true
    });
    MaMarkupComponent.prototype.ngOnInit = function () {
        this.inited = true;
        this.innerHtml = this._innerHtml;
    };
    MaMarkupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-markup',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    MaMarkupComponent.ctorParameters = function () { return []; };
    MaMarkupComponent.propDecorators = {
        "innerHtml": [{ type: core_1.HostBinding, args: ['innerHTML',] },],
        "maHtmlMarkup": [{ type: core_1.Input },],
    };
    return MaMarkupComponent;
}());
exports.MaMarkupComponent = MaMarkupComponent;
//# sourceMappingURL=markup.component.js.map