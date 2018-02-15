import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { MaBreadcrumbsItems } from './breadcrumbs.model';
import { MaBreadcrumbsItemDirective } from './breadcrumbs-item.directive';

export * from './breadcrumbs.model';

/**
 * # Breadcrumbs list
 *
 * Generuje listę breadcrumbsów
 *
 * {@link MaBreadcrumbsItemDirective} - (opcjonalnie) wskazuje custom template
 */
@Component({
  selector: 'ma-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class MaBreadcrumbsComponent implements OnInit {

  /** lista elementow przekazywanych do template breadcrumbsow */
  @Input() maItems: MaBreadcrumbsItems;
  @ContentChild(MaBreadcrumbsItemDirective, {read: TemplateRef}) itemTemplate: any;

  constructor() { }

  ngOnInit() {
  }

}
