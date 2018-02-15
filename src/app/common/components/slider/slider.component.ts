import { MaSliderItemDirective } from './slider-item.directive';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChildren,
  QueryList,
  HostBinding,
  OnDestroy
} from '@angular/core';

import { MaSliderOptions, MaSliderState, maSliderOptionsDefaults } from './slider.model';
import { Element } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
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
@Component({
  selector: 'ma-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class MaSliderComponent implements OnDestroy, AfterViewInit {
  @HostBinding('class.ma-slider') __classMaSlider = true;
  @HostBinding('class.swiper-container') __classSwiperContainer = true;

  /** Ustawienia slidera */
  @Input() set maOptions(options: MaSliderOptions) {
    this._options = Object.assign({}, maSliderOptionsDefaults, options);
  }

  /** Emituje bieżący stan slidera */
  @Output() state$: Observable<MaSliderState>;

  /** Lista slajdów */
  @ContentChildren(MaSliderItemDirective, {descendants: true}) slides: QueryList<MaSliderItemDirective>;

  private slider: ElementRef;
  private swiperInstance: any;
  private updateSubject: BehaviorSubject<Partial<MaSliderState>>;
  private stateSubscription: Subscription;
  private _state: MaSliderState;
  private _options: MaSliderOptions;

  constructor(element: ElementRef) {
    this.slider = element;
    this.updateSubject = new BehaviorSubject<Partial<MaSliderState>>(<MaSliderState>{
      initialized: false,
      slides: 0,
      currentSlide: 0,
      isBeginning: true,
      isEnd: true
    });
    const state = this.updateSubject.scan(
      (acc, curr) => Object.assign({}, acc, curr),
      <Partial<MaSliderState>>{}
    ).publishReplay(1);
    this.state$ = state as Observable<MaSliderState>;
    state.connect();

    this.stateSubscription = this.state$.subscribe(currentState => {
      this._state = currentState;
      this.updateSlidersActiveCssIndicator();
    });
    this._options = Object.assign({}, maSliderOptionsDefaults);
  }

  slideNext(time?: number) {
    if (!this._options.loop && this._state.currentSlide < (this._state.slides - 1)) {
      this.swiperInstance.slideNext(time);
    }
  }

  slidePrev(time?: number) {
    this.swiperInstance.slidePrev(time);
  }

  slideTo(index: number, time?: number) {
    this.swiperInstance.slideTo(index, time);
  }

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.swiperInstance = new Swiper(this.slider.nativeElement, this._options as SwiperOptions);
    this.updateSubject.next({
      initialized: true,
      slides: this.slides.length,
      currentSlide: this.swiperInstance.activeIndex,
      isBeginning: this.swiperInstance.isBeginning,
      isEnd: this.swiperInstance.isEnd
    });
    this.swiperInstance.on('slideChange', () => {
      this.updateSubject.next({
        slides: this.slides.length,
        currentSlide: this.swiperInstance.activeIndex,
        isBeginning: this.swiperInstance.isBeginning,
        isEnd: this.swiperInstance.isEnd
      });
    });

    this.updateSlidersActiveCssIndicator();
  }

  private updateSlidersActiveCssIndicator() {
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
