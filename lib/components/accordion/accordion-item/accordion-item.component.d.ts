import { AfterContentInit, EventEmitter } from '@angular/core';
import { MaAccordionItemContentComponent } from '../accordion-item-content/accordion-item-content.component';
import { MaAccordionItemHeaderComponent } from '../accordion-item-header/accordion-item-header.component';
export declare class MaAccordionItemComponent implements AfterContentInit {
    maLock: boolean;
    maOpen: boolean;
    itemChange: EventEmitter<string>;
    itemHeader: MaAccordionItemHeaderComponent;
    itemContent: MaAccordionItemContentComponent;
    constructor();
    ngAfterContentInit(): void;
    openItem(): void;
    closeItem(): void;
}
