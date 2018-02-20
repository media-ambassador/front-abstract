import { QueryList, AfterContentInit } from '@angular/core';
import { MaAccordionItemComponent } from './accordion-item/accordion-item.component';
export declare class MaAccordionComponent implements AfterContentInit {
    items: QueryList<MaAccordionItemComponent>;
    constructor();
    ngAfterContentInit(): void;
    toogleItems(id: number): void;
    closeAll(): void;
    showAll(): void;
}
