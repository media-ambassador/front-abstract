import { QueryList, AfterContentInit } from '@angular/core';
import { MaAccordionItemComponent } from './accordion-item/accordion-item.component';
export declare class MaAccordionComponent implements AfterContentInit {
    items: QueryList<MaAccordionItemComponent>;
    constructor();
    ngAfterContentInit(): void;
    toogleItems(id: number): void;
    closeItem(index: number, force?: boolean): void;
    closeAll(force?: boolean): void;
    showItem(index: number, force?: boolean): void;
    showAll(force?: boolean): void;
}
