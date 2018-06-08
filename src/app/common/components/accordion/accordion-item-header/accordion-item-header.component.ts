import { Component, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'ma-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss']
})
export class MaAccordionItemHeaderComponent {
  @Output() headerClicked: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    this.headerClicked.emit(this.isOpen);
  }

  constructor() { }

}
