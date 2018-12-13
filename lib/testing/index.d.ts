import { DebugElement } from '@angular/core';
/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export declare const ButtonClickEvents: {
    left: {
        button: number;
    };
    right: {
        button: number;
    };
};
/** Simulate element click. Defaults to mouse left-button click event. */
export declare function click(el: DebugElement | HTMLElement, eventObj?: any): void;
