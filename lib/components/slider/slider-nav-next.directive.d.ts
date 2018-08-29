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
    protected sliderStateSub: any;
    onSelectStart(event: Event): boolean;
    onClick(event: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
