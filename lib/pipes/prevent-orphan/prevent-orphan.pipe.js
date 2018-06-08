"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaPreventOrphanPipe = /** @class */ (function () {
    function MaPreventOrphanPipe() {
        this.regex = new RegExp(/(\s)([\S])[\s]+/g);
        this.replacement = '$1$2&nbsp;';
    }
    MaPreventOrphanPipe.prototype.transform = function (value, args) {
        return value.replace(this.regex, this.replacement);
    };
    MaPreventOrphanPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'preventOrphan'
                },] },
    ];
    return MaPreventOrphanPipe;
}());
exports.MaPreventOrphanPipe = MaPreventOrphanPipe;
//# sourceMappingURL=prevent-orphan.pipe.js.map