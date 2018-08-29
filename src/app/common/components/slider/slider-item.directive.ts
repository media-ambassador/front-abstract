import { Directive, Host, Optional, HostBinding } from '@angular/core';
import { MaSliderComponent } from './slider.component';
import { maSliderCssClassItem, maSliderCssClassItemActive } from './slider.model';

/**
 * Wskazuje element, który będzie slajdem
 */
@Directive({
  selector: '[maSliderItem]',
})
export class MaSliderItemDirective {

  /** klasy przypisane do hosta na sztywno */
  @HostBinding('class.' + maSliderCssClassItem)
  @HostBinding('class.swiper-slide') // klasa na potrzeby komponentu slajdera
  protected __cssClasses = true;

  @HostBinding('class.' + maSliderCssClassItemActive) active = false;

  /** Ustala czy slajd jest aktywnym slajdem */
  setActive(active: boolean) {
    this.active = active;
  }
}
