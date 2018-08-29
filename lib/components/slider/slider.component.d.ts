import { MaSliderItemDirective } from './slider-item.directive';
import { ElementRef, QueryList, AfterViewInit, OnDestroy, AfterContentInit } from '@angular/core';
import { MaSliderOptions, MaSliderState, MaSliderPagination } from './slider.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
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
export declare class MaSliderComponent implements OnDestroy, AfterViewInit, AfterContentInit {
    __cssClasses: boolean;
    /** Ustawienia slidera */
    maOptions: MaSliderOptions;
    /** Emituje bieżący stan slidera */
    state$: Observable<MaSliderState>;
    /** Emituje listę elementów do paginacji */
    pagination$: Observable<MaSliderPagination>;
    /** Lista slajdów */
    slides: QueryList<MaSliderItemDirective>;
    protected slider: ElementRef;
    protected swiperInstance: any;
    protected updateSubject: BehaviorSubject<Partial<MaSliderState>>;
    protected stateSubscription: Subscription;
    protected eventsSubscription: Subscription;
    protected _state: MaSliderState;
    protected _options: MaSliderOptions;
    constructor(element: ElementRef);
    slideNext(time?: number): void;
    slidePrev(time?: number): void;
    slideTo(index: number, time?: number): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    protected updateSlidersActiveCssIndicator(): void;
}
