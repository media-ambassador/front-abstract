import { MaSliderNavNext } from './slider.model';
import { OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';
/**
 * (client) przewija do następnego slajdu
 */
export declare class MaSliderNavNextDirective implements OnInit, OnDestroy {
    /** Slajder do nawigowania (interfejs z next) */
    maSlider: MaSliderNavNext;
    /** Czas przewiniecia slajdu w ms */
    maTime: number;
    active: boolean;
    /** subskrypcja Rx */
    private sliderStateSub;
    onClick(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
