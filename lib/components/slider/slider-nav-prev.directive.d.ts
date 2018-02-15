import { MaSliderNavPrev } from './slider.model';
import { OnInit, OnDestroy } from '@angular/core';
/**
 * (click) przewija do poprzedniego slajdu
 */
export declare class MaSliderNavPrevDirective implements OnInit, OnDestroy {
    /** Slajder do nawigowania */
    maSlider: MaSliderNavPrev;
    /** Czas przewiniecia slajdu w ms */
    maTime: number;
    active: boolean;
    private sliderStateSub;
    onClick(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
