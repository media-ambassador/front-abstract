import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { MaAccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'ma-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class MaAccordionComponent implements AfterContentInit {

  @ContentChildren(MaAccordionItemComponent, {descendants: true}) items: QueryList<MaAccordionItemComponent>;
  
  constructor() { }

  ngAfterContentInit(): void {
    this.items.toArray().forEach(
      (item, index) => item.itemChange.subscribe(() => this.toogleItems(index))
    );
  }

  toogleItems(id: number) {
    this.items.toArray().forEach((item, index) => {
      if (index != id)
        item.closeItem();
    });
  }

  closeItem(index:number, force = false) {
    this.items.toArray()[index].closeItem(force);
  }

  closeAll(force = false) {
    this.items.toArray().forEach(item => item.closeItem(force));
  }

  showItem(index:number, force = false) {
    this.items.toArray()[index].openItem(force);
  }

  showAll(force = false) {
    this.items.toArray().forEach(item => item.openItem(force));
  }
}
