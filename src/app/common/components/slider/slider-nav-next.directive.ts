import {
  Directive,
  Input
} from '@angular/core';
import { MaSliderNavNext, maSliderCssClassNavNextActive } from './slider.model';
import {
  HostListener,
  HostBinding,
  AfterViewInit,
  OnInit,
  OnDestroy
} from '@angular/core';
import 'rxjs/add/operator/filter';

/**
 * (client) przewija do następnego slajdu
 */
@Directive({
  selector: '[maSliderNavNext]'
})
export class MaSliderNavNextDirective implements OnInit, OnDestroy {

  /** Slajder do nawigowania (interfejs z next) */
  @Input('maSliderNavNext') maSlider: MaSliderNavNext;
  /** Czas przewiniecia slajdu w ms */
  @Input() maTime: number;

  @HostBinding('class.' + maSliderCssClassNavNextActive) active = false;

  /** subskrypcja Rx */
  private sliderStateSub: any;

  @HostListener('click') onClick() {
    if (this.maSlider) {
      this.maSlider.slideNext(this.maTime);
    }
  }

  ngOnInit() {
    setTimeout(() =>
      this.sliderStateSub = this.maSlider.state$
      .filter(sliderState => sliderState.initialized)
      .subscribe(sliderState => {
        this.active = !sliderState.isEnd;
    }), 0);
  }

  ngOnDestroy() {
    if (this.sliderStateSub) {
      this.sliderStateSub.unsubscribe();
    }
  }
}
