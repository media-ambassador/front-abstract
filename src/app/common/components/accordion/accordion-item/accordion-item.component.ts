import { Component, OnInit, ContentChild, AfterContentInit, Output, EventEmitter, Input } from '@angular/core';
import { MaAccordionItemContentComponent } from '../accordion-item-content/accordion-item-content.component';
import { MaAccordionItemHeaderComponent } from '../accordion-item-header/accordion-item-header.component';

@Component({
  moduleId: module.id,
  selector: 'ma-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class MaAccordionItemComponent implements AfterContentInit {
  @Input() maLock: boolean;
  @Input() maOpen: boolean;

  @Output() itemChange: EventEmitter<string> = new EventEmitter();

  @ContentChild(MaAccordionItemHeaderComponent) itemHeader: MaAccordionItemHeaderComponent;
  @ContentChild(MaAccordionItemContentComponent) itemContent: MaAccordionItemContentComponent;

  constructor() { }

  ngAfterContentInit(): void {
    this.itemHeader.headerClicked.subscribe(() => {
      if (this.maLock)
        return;

      this.openItem();
      this.itemChange.emit();
    });

    if (this.maOpen) {
      this.itemContent.show();
    }
  }

  public openItem(force = false) {
    if (this.maLock && !force)
      return;

    this.itemContent.show();
  }

  public closeItem(force = false) {
    if (this.maLock && !force)
      return;

    this.itemContent.hide();
  }

}
