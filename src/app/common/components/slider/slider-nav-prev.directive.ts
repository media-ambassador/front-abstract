import {
  Directive,
  Input,
  HostListener,
  HostBinding,
  AfterViewInit,
  OnInit,
  OnDestroy
} from '@angular/core';
import { MaSliderNavPrev } from './slider.model';
import { maSliderCssClassNavPrevActive } from './slider.component';

/**
 * (click) przewija do poprzedniego slajdu
 */
@Directive({
  selector: '[maSliderNavPrev]'
})
export class MaSliderNavPrevDirective implements OnInit, OnDestroy {

  /** Slajder do nawigowania */
  @Input('maSliderNavPrev') maSlider: MaSliderNavPrev;
  /** Czas przewiniecia slajdu w ms */
  @Input() maTime: number;

  @HostBinding('class.' + maSliderCssClassNavPrevActive) active = false;

  private sliderStateSub: any;

  @HostListener('selectstart', [ '$event' ]) onSelectStart(event: Event): boolean {
    if (event.preventDefault) {
      event.preventDefault();
    }
    return false;
  }

  @HostListener('click', [ '$event' ]) onClick(event: Event): void {
    if (this.maSlider) {
      this.maSlider.slidePrev(this.maTime);
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
        this.active = !sliderState.isBeginning;
    }), 0);
  }

  ngOnDestroy() {
    if (this.sliderStateSub) {
      this.sliderStateSub.unsubscribe();
    }
  }

}
