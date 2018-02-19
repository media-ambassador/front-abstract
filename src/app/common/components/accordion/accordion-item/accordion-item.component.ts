import { Component, OnInit, ContentChild, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { MaAccordionItemContentComponent } from '../accordion-item-content/accordion-item-content.component';
import { MaAccordionItemHeaderComponent } from '../accordion-item-header/accordion-item-header.component';

@Component({
  moduleId: module.id,
  selector: 'ma-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class MaAccordionItemComponent implements AfterContentInit {
  @Output() itemChange: EventEmitter<string> = new EventEmitter();

  @ContentChild(MaAccordionItemHeaderComponent) itemHeader: MaAccordionItemHeaderComponent;
  @ContentChild(MaAccordionItemContentComponent) itemContent: MaAccordionItemContentComponent;

  constructor() { }

  ngAfterContentInit(): void {
    this.itemHeader.headerClicked.subscribe(() => {
      this.openItem();
      this.itemChange.emit();
    });
  }

  public openItem() {
    this.itemContent.show();
  }

  public closeItem() {
    this.itemContent.hide();
  }

}
