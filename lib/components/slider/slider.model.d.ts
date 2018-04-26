import { MaSliderBreakpointData } from './slider.model';
import { Observable } from 'rxjs/Observable';
export declare type SlideEffect = 'slide' | 'fade';
export declare type SlideDirection = 'horizontal' | 'vertical';
export interface CommonWithBreakpoint {
    slidesPerView?: number;
    /** odstępy pomiędzy slajdami w px (jeśli wiele slajdów jednocześnie) */
    spaceBetween?: number;
}
export interface MaRwdThresholds<T> {
    [index: number]: T;
}
export interface MaSliderBreakpointData extends CommonWithBreakpoint {
}
export interface MaSliderBreakpoints extends MaRwdThresholds<MaSliderBreakpointData> {
}
export interface MaSliderOptions extends CommonWithBreakpoint {
    /** slide | fade */
    effect?: SlideEffect;
    /** horizontal | vertical */
    direction?: SlideDirection;
    speed?: number;
    loop?: boolean;
    autoplay?: number;
    allowTouchMove?: boolean;
    /** RWD breakpoints, umozliwia zmiane ustawień w zależności od szerokości wyświetlania */
    breakpoints?: MaSliderBreakpoints;
}
export declare const maSliderOptionsDefaults: MaSliderOptions;
export interface MaSliderState {
    initialized: boolean;
    /** ilość slajdów */
    slides: number;
    /** ilość slajdów wyświetlanych na raz w danym momencie */
    slidesPerView: number;
    /** aktualnie wyświetlany slajd (index) - gdy wiele slajdów, to pierwszy wyświetlany slide */
    currentSlide: number;
    /** czy jest wyświetlany pierwszy slajd */
    isBeginning: boolean;
    /** czy jest wyświetlany ostatni slajd */
    isEnd: boolean;
    /** czy jest włączony tryb loop */
    loop: boolean;
}
export interface MaSliderPaginationItem {
    /** id pierwszego slajdu na stronie - nie licząc klonowanych slajdów */
    slideIndex: number;
    /** czy strona aktywna */
    active: boolean;
}
export declare type MaSliderPagination = MaSliderPaginationItem[];
export interface MaSliderStateHolder {
    state$: Observable<MaSliderState>;
}
export interface MaSliderNavPrev extends MaSliderStateHolder {
    slidePrev(time?: number): void;
}
export interface MaSliderNavNext extends MaSliderStateHolder {
    slideNext(time?: number): void;
}
export interface MaSliderNavTo extends MaSliderStateHolder {
    slideTo(index: number, time?: number): void;
}
export interface MaSliderNavigation extends MaSliderNavPrev, MaSliderNavNext, MaSliderNavTo {
}
export declare const maSliderCssClassItem = "ma-slider__item";
export declare const maSliderCssClassItemActive = "ma-slider__item--active";
export declare const maSliderCssClassTopLayer = "ma-slider__top-layer";
/** maSlider.state.currentSlide = maSliderNavTo.maIndex input */
export declare const maSliderCssClassNavToActive = "ma-slider__nav-to--active";
/** można slajdować wstecz */
export declare const maSliderCssClassNavPrevActive = "ma-slider__nav-prev--active";
/** można slajdować w przód */
export declare const maSliderCssClassNavNextActive = "ma-slider__nav-next--active";
