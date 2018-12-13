"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var MaYouTubeComponent = /** @class */ (function () {
    function MaYouTubeComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.baseEmbedUrl = 'https://www.youtube.com/embed';
    }
    MaYouTubeComponent.prototype.ngOnInit = function () {
        if (!!this.content) {
            this.url = this.getSafeUrl();
        }
    };
    MaYouTubeComponent.prototype.getSafeUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.baseEmbedUrl + "/" + this.content);
    };
    MaYouTubeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-youtube',
                    template: "\n    <section>\n\n      <iframe *ngIf=\"content && url\"\n              type=\"text/html\"\n              [src]=\"url\"\n              allowfullscreen\n              mozallowfullscreen\n              msallowfullscreen\n              oallowfullscreen\n              webkitallowfullscreen\n              frameborder=\"0\">\n      </iframe>\n\n    </section>\n  ",
                    styles: ["\n    :host > section iframe {\n      width: 100%;\n      height: 450px; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaYouTubeComponent.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    MaYouTubeComponent.propDecorators = {
        "content": [{ type: core_1.Input },],
    };
    return MaYouTubeComponent;
}());
exports.MaYouTubeComponent = MaYouTubeComponent;
//# sourceMappingURL=youtube.component.js.map