import {
  Directive,
  Input,
  HostBinding,
  AfterViewInit,
  OnInit,
  OnDestroy,
  HostListener
} from '@angular/core';
import { MaSliderNavTo } from './slider.model';
import { maSliderCssClassNavToActive } from './slider.component';

/**
 * (click) przewija do slajdu podanego w maSliderNavToIndex
 */
@Directive({
  selector: '[maSliderNavTo]'
})
export class MaSliderNavToDirective implements OnInit, OnDestroy {

  /** Slajder do nawigowania */
  @Input('maSliderNavTo') maSlider: MaSliderNavTo;

  /** Czas przewiniecia slajdu w ms */
  @Input() maTime: number;

  /** Index docelowego sladju 0-indexed */
  @Input() maIndex: number;

  @HostBinding('class.' + maSliderCssClassNavToActive) active = false;

  private sliderStateSub: any;

  @HostListener('selectstart', [ '$event' ]) onSelectStart(event: Event): boolean {
    if (event.preventDefault) {
      event.preventDefault();
    }
    return false;
  }

  @HostListener('click', [ '$event' ]) onClick(event: Event): void {
    if (this.maSlider) {
      this.maSlider.slideTo(this.maIndex, this.maTime);
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  ngOnInit() {
    setTimeout(() =>
      this.sliderStateSub = this.maSlider.state$
      .filter(sliderState => sliderState.initialized)
      .subscribe(sliderState => {
        this.active = sliderState.currentSlide === this.maIndex;
    }), 0);
  }

  ngOnDestroy() {
    if (this.sliderStateSub) {
      this.sliderStateSub.unsubscribe();
    }
  }

}
