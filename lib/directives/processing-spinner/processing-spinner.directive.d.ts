import { ElementRef, AfterViewInit, OnChanges } from '@angular/core';
export declare class MaProcessingSpinnerDirective implements AfterViewInit, OnChanges {
    private element;
    maProcessingSpinner: boolean;
    isProcessed: boolean;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
