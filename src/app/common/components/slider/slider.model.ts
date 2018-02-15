import { MaSliderBreakpointData } from './slider.model';
import { Observable } from 'rxjs/Observable';
import { MaRwdThresholds } from '../../models';

export type SlideEffect = 'slide' | 'fade';
export type SlideDirection = 'horizontal' | 'vertical';

export interface CommonWithBreakpoint {
  slidesPerView?: number;
  /** odstępy pomiędzy slajdami w px (jeśli wiele slajdów jednocześnie) */
  spaceBetween?: number;
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

export const maSliderOptionsDefaults: MaSliderOptions = {
  effect: 'slide',
  direction: 'horizontal',
  speed: 400,
  loop: false,
  allowTouchMove: true
};

export interface MaSliderState {
  initialized: boolean;
  /** ilość slajdów */
  slides: number;
  /** aktualnie wyświetlany slajd (index) - gdy wiele slajdów, to pierwszy wyświetlany slide */
  currentSlide: number;
  /** czy jest wyświetlany pierwszy slajd */
  isBeginning: boolean;
  /** czy jest wyświetlany ostatni slajd */
  isEnd: boolean;
}

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
export interface MaSliderNavigation
  extends
    MaSliderNavPrev,
    MaSliderNavNext,
    MaSliderNavTo {
}

export const maSliderCssClassItem = 'ma-slider__item';
export const maSliderCssClassItemActive = 'ma-slider__item--active';

export const maSliderCssClassTopLayer = 'ma-slider__top-layer';
/** maSlider.state.currentSlide = maSliderNavTo.maIndex input */
export const maSliderCssClassNavToActive = 'ma-slider__nav-to--active';
/** można slajdować wstecz */
export const maSliderCssClassNavPrevActive = 'ma-slider__nav-prev--active';
/** można slajdować w przód */
export const maSliderCssClassNavNextActive = 'ma-slider__nav-next--active';

