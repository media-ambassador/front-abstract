import {
  Component,
  OnInit,
  Input,
  HostBinding
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
    if (this.inited) {
      this.innerHtml = markup;
    }
    this._innerHtml = markup;
  }

  protected inited = false;
  protected _innerHtml = '';

  constructor() { }

  ngOnInit() {
    this.inited = true;
    this.innerHtml = this._innerHtml;
  }

}
