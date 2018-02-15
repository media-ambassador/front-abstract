import { Directive } from '@angular/core';

/**
 * Wskazuje template do użycia
 *
 * zmienne (context) przekazywane do template:
 *
 * ($implicit: item), index, first, last, odd, even
 *
 */
@Directive({
  selector: '[maBreadcrumbsItem]'
})
export class MaBreadcrumbsItemDirective {

  constructor() { }

}
