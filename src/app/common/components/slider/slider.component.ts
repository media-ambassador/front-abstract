import { MaSliderItemDirective } from './slider-item.directive';
import {
  Component,
  Input,
  Output,
  ElementRef,
  ContentChildren,
  QueryList,
  HostBinding,
  AfterViewInit,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';
import range from 'lodash/range';

import { MaSliderOptions, MaSliderState, maSliderOptionsDefaults, MaSliderPagination } from './slider.model';
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
import { async } from 'rxjs/scheduler/async';

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
@Component({
  selector: 'ma-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class MaSliderComponent implements OnDestroy, AfterViewInit, AfterContentInit {
  @HostBinding('class.ma-slider')
  @HostBinding('class.swiper-container')
    __cssClasses = true;

  /** Ustawienia slidera */
  @Input() set maOptions(options: MaSliderOptions) {
    this._options = Object.assign({}, maSliderOptionsDefaults, this._options, options);
  }

  /** Emituje bieżący stan slidera */
  @Output() state$: Observable<MaSliderState>;

  /** Emituje listę elementów do paginacji */
  @Output() pagination$: Observable<MaSliderPagination>;

  /** Lista slajdów */
  @ContentChildren(MaSliderItemDirective, { descendants: true }) slides: QueryList<MaSliderItemDirective>;

  protected slider: ElementRef;
  protected swiperInstance: any;
  protected updateSubject: BehaviorSubject<Partial<MaSliderState>>;
  protected stateSubscription: Subscription;
  protected eventsSubscription: Subscription;
  protected _state: MaSliderState;
  protected _options: MaSliderOptions;

  constructor(element: ElementRef) {
    this.slider = element;
    this.updateSubject = new BehaviorSubject<Partial<MaSliderState>>(<MaSliderState>{
      initialized: false,
      slides: 0,
      slidesPerView: 1,
      currentSlide: 0,
      isBeginning: true,
      isEnd: true,
      loop: false
    });
    const state = this.updateSubject.scan(
        (acc, curr) => Object.assign({}, acc, curr),
        <Partial<MaSliderState>>{}
      ).publishReplay(1);
    this.state$ = state as Observable<MaSliderState>;
    state.connect();

    this.stateSubscription = this.state$
      .subscribe(currentState => {
        this._state = currentState;
        this.updateSlidersActiveCssIndicator();
      });
    this._options = Object.assign({}, maSliderOptionsDefaults);

    this.pagination$ = this.state$
      .distinctUntilChanged((s1, s2) => s1.currentSlide === s2.currentSlide
        && s1.slidesPerView === s2.slidesPerView
        && s1.slides === s2.slides)
      .map(sliderState => range(sliderState.loop ? sliderState.slides : sliderState.slides - (sliderState.slidesPerView - 1))
          .map(count => ({slideIndex: count, active: count === sliderState.currentSlide}))
      ).observeOn(async)
      ;
  }

  slideNext(time?: number) {
    this.swiperInstance.slideNext(time);
  }

  slidePrev(time?: number) {
    this.swiperInstance.slidePrev(time);
  }

  slideTo(index: number, time?: number) {
    if (this._options.loop) {
      this.swiperInstance.slideToLoop(index, time);
    } else {
      this.swiperInstance.slideTo(index, time);
    }
  }

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
    this.eventsSubscription.unsubscribe();
  }

  ngAfterContentInit() {
    this.updateSubject.next({
      slides: this.slides.length
    });
  }

  ngAfterViewInit() {
    const self = this;
    this.swiperInstance = new Swiper(this.slider.nativeElement, this._options);

    this.updateSubject.next({
      initialized: true,
      slides: this.slides.length,
      slidesPerView: this.swiperInstance.params.slidesPerView || 1,
      currentSlide: 0,
      isBeginning: this.swiperInstance.isBeginning,
      isEnd: this.swiperInstance.isEnd,
      loop: this.swiperInstance.params.loop
    });

    const resize$ = Observable
      .fromEvent(this.swiperInstance, 'resize');
    const slideChange$ = Observable
      .fromEvent(this.swiperInstance, 'slideChange');

    this.eventsSubscription = Observable.merge(
      slideChange$,
      resize$.throttleTime(500)
    ).subscribe(() => {
      this.updateSubject.next({
        slides: this.slides.length,
        slidesPerView: this.swiperInstance.params.slidesPerView || 1,
        currentSlide: this.swiperInstance.realIndex,
        isBeginning: this.swiperInstance.isBeginning,
        isEnd: this.swiperInstance.isEnd,
        loop: this.swiperInstance.params.loop
      });
    });

    this.updateSlidersActiveCssIndicator();
  }

  protected updateSlidersActiveCssIndicator() {
    if (!this._state.initialized) {
      return;
    }
    setTimeout(() => {
      this.slides.forEach(slide => slide.setActive(false));
      if (this.slides.length && this.slides.toArray()[this._state.currentSlide]) {
        this.slides.toArray()[this._state.currentSlide].setActive(true);
      } else if (this.slides.length > 0) {
        console.error(`Index out of range ${this._state.currentSlide} in maSliderComponent`);
      }
    }, 0);
  }

}
