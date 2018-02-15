import { MaSliderItemDirective } from './slider-item.directive';
import { ElementRef, AfterViewInit, QueryList, OnDestroy } from '@angular/core';
import { MaSliderOptions, MaSliderState } from './slider.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';
export * from './slider.model';
/**
 * {@link MaSliderItemDirective} - wskazuje element będący slajdem,<br>
 * {@link MaSliderTopLayerDirective} - wskazuje element wyświetalny<br>
 * ponad slajderem (content NIE przesuwany podczas przewijania).
 *
 * Poniższe dyrektywy umożliwiają dodanie nawigacji do slajdera.<br>
 * Pobieraja one w parametrze ElementRef do slajdera,<br>
 * który mają nawigować.
 *
 * {@link MaSliderNavPrevDirective},<br>
 * {@link MaSliderNavNextDirective},<br>
 * {@link MaSliderNavToDirective} wymaga podania dodatkowego parametru
 * MaSliderNavToIndex
 *
 * @example
 * <ma-slider #mySlider>
 *   <img maSliderItem *ngFor="let slide of slides" src="{{slide.url}}"/>
 *   <div maSliderTopLayer>Warstwa nie przewijana</div>
 * </ma-slider>
 * <div [maSliderNavPrev]="mySlider" class="my-class-slider-prev">&lt;</div>
 * <div [maSliderNavNext]="mySlider" class="my-class-slider-next">&gt;</div>
 */
export declare class MaSliderComponent implements OnDestroy, AfterViewInit {
    __classMaSlider: boolean;
    __classSwiperContainer: boolean;
    /** Ustawienia slidera */
    maOptions: MaSliderOptions;
    /** Emituje bieżący stan slidera */
    state$: Observable<MaSliderState>;
    /** Lista slajdów */
    slides: QueryList<MaSliderItemDirective>;
    private slider;
    private swiperInstance;
    private updateSubject;
    private stateSubscription;
    private _state;
    private _options;
    constructor(element: ElementRef);
    slideNext(time?: number): void;
    slidePrev(time?: number): void;
    slideTo(index: number, time?: number): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private updateSlidersActiveCssIndicator();
}
