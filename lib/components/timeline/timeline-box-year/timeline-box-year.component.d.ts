import { AfterContentInit, QueryList } from '@angular/core';
import { MaTimelineBoxItemComponent } from '../timeline-box-item/timeline-box-item.component';
export declare class MaTimelineBoxYearComponent implements AfterContentInit {
    year: number;
    timelineItems: QueryList<MaTimelineBoxItemComponent>;
    boxHeight: number;
    constructor();
    ngAfterContentInit(): void;
    updateHeight(height: number, gap: number, separator: number): void;
}
