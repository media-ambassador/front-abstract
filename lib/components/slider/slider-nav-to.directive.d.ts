import { OnInit, OnDestroy } from '@angular/core';
import { MaSliderNavTo } from './slider.model';
/**
 * (click) przewija do slajdu podanego w maSliderNavToIndex
 */
export declare class MaSliderNavToDirective implements OnInit, OnDestroy {
    /** Slajder do nawigowania */
    maSlider: MaSliderNavTo;
    /** Czas przewiniecia slajdu w ms */
    maTime: number;
    /** Index docelowego sladju 0-indexed */
    maIndex: number;
    active: boolean;
    protected sliderStateSub: any;
    onSelectStart(event: Event): boolean;
    onClick(event: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
