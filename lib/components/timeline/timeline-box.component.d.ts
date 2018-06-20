import { AfterContentInit, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { MaTimelineBoxYearComponent } from './timeline-box-year/timeline-box-year.component';
export declare class MaTimelineBoxComponent implements AfterContentInit {
    private el;
    private renderer;
    timelineHeight: number;
    transitionY: number;
    yearSeparator: number;
    timelineYears: QueryList<MaTimelineBoxYearComponent>;
    constructor(el: ElementRef, renderer: Renderer2);
    ngAfterContentInit(): void;
}
