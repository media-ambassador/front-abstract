import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MaTimelineBoxItemSide } from '..';
export declare class MaTimelineBoxItemComponent implements OnInit {
    private el;
    private renderer;
    private timelineHeight;
    itemSide: MaTimelineBoxItemSide;
    isLeftSide: boolean;
    isRightSide: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    updateHeight(height: number, index: number, gap: number): void;
    getItemHeight(): number;
}
