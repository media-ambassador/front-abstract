"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * # MarkupComponent
 *
 * Umożliwia wstawienie markupu HTML bezpośrednio do kodu strony.
 * Usuwa tag &lt;script&gt;.
 */
var MaMarkupComponent = /** @class */ (function () {
    function MaMarkupComponent(sanitizer, elementRef, router) {
        this.sanitizer = sanitizer;
        this.elementRef = elementRef;
        this.router = router;
        this.updateHtml = new core_1.EventEmitter();
        this.initialized = false;
        this._innerHtml = '';
    }
    Object.defineProperty(MaMarkupComponent.prototype, "maHtmlMarkup", {
        set: /** Kod HTML do umieszczenia w innerHTML */
        function (markup) {
            if (this.initialized) {
                this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(markup);
                this.updateHtml.emit({ element: this.elementRef.nativeElement, innerHtml: this.innerHtml });
            }
            this._innerHtml = this.sanitizer.bypassSecurityTrustHtml(markup);
        },
        enumerable: true,
        configurable: true
    });
    MaMarkupComponent.prototype.onClick = function (event) {
        var target = event.target || {};
        if (target.tagName === 'A' && target.getAttribute) {
            var href = target.getAttribute('href');
            if (('string' === typeof href) && href.startsWith('/') && !href.startsWith('//')) {
                event.preventDefault();
                this.router.navigateByUrl(href);
            }
        }
    };
    MaMarkupComponent.prototype.ngOnInit = function () {
        this.initialized = true;
        this.innerHtml = this._innerHtml;
    };
    MaMarkupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-markup',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    MaMarkupComponent.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
        { type: core_1.ElementRef, },
        { type: router_1.Router, },
    ]; };
    MaMarkupComponent.propDecorators = {
        "innerHtml": [{ type: core_1.HostBinding, args: ['innerHTML',] },],
        "maHtmlMarkup": [{ type: core_1.Input },],
        "updateHtml": [{ type: core_1.Output },],
        "onClick": [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return MaMarkupComponent;
}());
exports.MaMarkupComponent = MaMarkupComponent;
//# sourceMappingURL=markup.component.js.map