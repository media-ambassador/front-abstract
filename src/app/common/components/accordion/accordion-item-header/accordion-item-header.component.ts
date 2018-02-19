import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ma-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss']
})
export class MaAccordionItemHeaderComponent {
  @Output() headerClicked: EventEmitter<any> = new EventEmitter();

  @HostListener('click') onClick() {
    this.headerClicked.emit();
  }

  constructor() { }

}
