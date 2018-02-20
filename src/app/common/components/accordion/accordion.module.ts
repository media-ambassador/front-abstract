import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaAccordionComponent } from './accordion.component';
import { MaAccordionItemContentComponent } from './accordion-item-content/accordion-item-content.component';
import { MaAccordionItemHeaderComponent } from './accordion-item-header/accordion-item-header.component';
import { MaAccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaAccordionComponent,
    MaAccordionItemContentComponent,
    MaAccordionItemHeaderComponent,
    MaAccordionItemComponent
  ],
  exports: [
    MaAccordionComponent,
    MaAccordionItemContentComponent,
    MaAccordionItemHeaderComponent,
    MaAccordionItemComponent
  ]
})
export class MaAccordionModule { }
