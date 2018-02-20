import { Component } from '@angular/core';

@Component({
  selector: 'ma-accordion-item-content',
  templateUrl: './accordion-item-content.component.html',
  styleUrls: ['./accordion-item-content.component.scss']
})
export class MaAccordionItemContentComponent {
  isOpen = false;

  constructor() { }

  show() {
    this.isOpen = true;
  }

  hide() {
    this.isOpen = false;
  }

}
