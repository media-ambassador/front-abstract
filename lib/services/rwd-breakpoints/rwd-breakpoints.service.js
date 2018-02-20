"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var _ = require("lodash");
var MaRwdBreakpointsService = /** @class */ (function () {
    function MaRwdBreakpointsService() {
        var _this = this;
        this.rwdBreakpoints = {
            default: { minSize: 99999, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            desktopDevices: { minSize: 1540, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            laptopDevices: { minSize: 1366, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            laptopSmallDevices: { minSize: 1200, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            tabletDevices: { minSize: 1024, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            tabletSmallDevices: { minSize: 768, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            phoneDevices: { minSize: 500, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            phoneSmallDevices: { minSize: 320, subject: new BehaviorSubject_1.BehaviorSubject(true) }
        };
        this.handleWindowSize(window.innerWidth);
        window.addEventListener('resize', function (event) { return _this.handleWindowSize(event.target.innerWidth); }, false);
    }
    MaRwdBreakpointsService.prototype.emitRwdBreakpoints = function (name, value) {
        this.rwdBreakpoints[name].subject.next(value);
    };
    MaRwdBreakpointsService.prototype.handleWindowSize = function (size) {
        var _this = this;
        _.forOwn(this.rwdBreakpoints, function (breakpoint, key) {
            size > breakpoint.minSize
                ? _this.emitRwdBreakpoints(key, false)
                : _this.emitRwdBreakpoints(key, true);
        });
    };
    MaRwdBreakpointsService.prototype.getRwdBreakpoint = function (name) {
        return this.rwdBreakpoints[name].subject.asObservable();
    };
    MaRwdBreakpointsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaRwdBreakpointsService.ctorParameters = function () { return []; };
    return MaRwdBreakpointsService;
}());
exports.MaRwdBreakpointsService = MaRwdBreakpointsService;
//# sourceMappingURL=rwd-breakpoints.service.js.map