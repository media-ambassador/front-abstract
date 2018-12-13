"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
exports.ButtonClickEvents = {
    left: { button: 0 },
    right: { button: 2 }
};
/** Simulate element click. Defaults to mouse left-button click event. */
function click(el, eventObj) {
    if (eventObj === void 0) { eventObj = exports.ButtonClickEvents.left; }
    if (el instanceof HTMLElement) {
        el.click();
    }
    else {
        el.triggerEventHandler('click', eventObj);
    }
}
exports.click = click;
//# sourceMappingURL=index.js.map