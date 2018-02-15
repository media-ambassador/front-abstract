import { Directive, HostBinding } from '@angular/core';
import { maSliderCssClassTopLayer } from './slider.model';

/**
 * Wskazuje warstwę nieprzewijaną podczas slajdowania
 */
@Directive({
  selector: '[maSliderTopLayer]',
})
export class MaSliderTopLayerDirective {

  /** klasy przypisane do hosta na sztywno */
  @HostBinding('class.' + maSliderCssClassTopLayer)
  private __cssClasses = true;

  constructor() { }

}
