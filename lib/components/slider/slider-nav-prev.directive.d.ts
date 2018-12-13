import { OnInit, OnDestroy } from '@angular/core';
import { MaSliderNavPrev } from './slider.model';
/**
 * (click) przewija do poprzedniego slajdu
 */
export declare class MaSliderNavPrevDirective implements OnInit, OnDestroy {
    /** Slajder do nawigowania */
    maSlider: MaSliderNavPrev;
    /** Czas przewiniecia slajdu w ms */
    maTime: number;
    active: boolean;
    protected sliderStateSub: any;
    onSelectStart(event: Event): boolean;
    onClick(event: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
