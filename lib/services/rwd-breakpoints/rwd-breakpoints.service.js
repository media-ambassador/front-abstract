"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var _ = require("lodash");
var MaRwdBreakpointsService = /** @class */ (function () {
    function MaRwdBreakpointsService() {
        var _this = this;
        this.rwdBreakpoints = {
            default: { minSize: 1540, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            desktopDevices: { minSize: 1366, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            laptopDevices: { minSize: 1200, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            laptopSmallDevices: { minSize: 1024, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            tabletDevices: { minSize: 768, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            tabletSmallDevices: { minSize: 500, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            phoneDevices: { minSize: 320, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            phoneSmallDevices: { minSize: 0, subject: new BehaviorSubject_1.BehaviorSubject(true) }
        };
        this.currentBreakpoint = 'default';
        this.handleWindowSize(window.innerWidth);
        window.addEventListener('resize', function (event) { return _this.handleWindowSize(event.target.innerWidth); }, false);
    }
    MaRwdBreakpointsService.prototype.emitRwdBreakpoints = function (name) {
        if (this.currentBreakpoint === name)
            return;
        this.currentBreakpoint = name;
        _.forOwn(this.rwdBreakpoints, function (breakpoint, key) {
            name === key
                ? breakpoint.subject.next(true)
                : breakpoint.subject.next(false);
        });
    };
    MaRwdBreakpointsService.prototype.handleWindowSize = function (size) {
        var _this = this;
        _.forOwn(this.rwdBreakpoints, function (breakpoint, key) {
            if (size > breakpoint.minSize) {
                _this.emitRwdBreakpoints(key);
                return false;
            }
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