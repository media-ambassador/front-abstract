"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MapToIterablePipe = /** @class */ (function () {
    function MapToIterablePipe() {
    }
    MapToIterablePipe.prototype.transform = function (dictionary) {
        var result = [];
        for (var key in dictionary) {
            if (dictionary.hasOwnProperty(key)) {
                result.push({ key: key, val: dictionary[key] });
            }
        }
        return result;
    };
    MapToIterablePipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'mapToIterable'
                },] },
    ];
    return MapToIterablePipe;
}());
exports.MapToIterablePipe = MapToIterablePipe;
//# sourceMappingURL=map-to-iterable.pipe.js.map