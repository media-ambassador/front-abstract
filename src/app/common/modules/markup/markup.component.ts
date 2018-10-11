import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, HostBinding, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MaMarkupUpdateInnerHtmlEvent } from './markup.model';

/**
 * # MarkupComponent
 *
 * Umożliwia wstawienie markupu HTML bezpośrednio do kodu strony.
 * Usuwa tag &lt;script&gt;.
 */
@Component({
  selector: 'ma-markup',
  template: ''
})
export class MaMarkupComponent implements OnInit {

  @HostBinding('innerHTML') innerHtml: any;

  /** Kod HTML do umieszczenia w innerHTML */
  @Input() set maHtmlMarkup(markup: string) {
    if (this.initialized) {
      this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(markup);
      this.updateHtml.emit({element: this.elementRef.nativeElement, innerHtml: this.innerHtml});
    }
    this._innerHtml = this.sanitizer.bypassSecurityTrustHtml(markup);
  }

  @Output() updateHtml: EventEmitter<MaMarkupUpdateInnerHtmlEvent> = new EventEmitter<MaMarkupUpdateInnerHtmlEvent>();

  protected initialized = false;
  protected _innerHtml = '' as any;

  @HostListener('click', ['$event']) onClick(event: any) {
    const target = event.target || {};
    if (target.tagName === 'A' && target.getAttribute) {
      const href = target.getAttribute('href');
      if (('string' === typeof href) && href.startsWith('/') && !href.startsWith('//')) {
        event.preventDefault();
        this.router.navigateByUrl(href);
      }
    }
  }

  constructor(
    protected sanitizer: DomSanitizer,
    protected elementRef: ElementRef,
    protected router: Router
  ) { }

  ngOnInit() {
    this.initialized = true;
    this.innerHtml = this._innerHtml;
  }

}
