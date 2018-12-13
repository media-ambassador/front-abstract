"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MaSafeHtmlPipe = /** @class */ (function () {
    function MaSafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MaSafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    MaSafeHtmlPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'safeHtml',
                },] },
    ];
    /** @nocollapse */
    MaSafeHtmlPipe.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return MaSafeHtmlPipe;
}());
exports.MaSafeHtmlPipe = MaSafeHtmlPipe;
//# sourceMappingURL=safe-html.pipe.js.map