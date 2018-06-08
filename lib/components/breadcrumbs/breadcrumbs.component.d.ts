import { OnInit } from '@angular/core';
import { MaBreadcrumbsItems } from './breadcrumbs.model';
export * from './breadcrumbs.model';
/**
 * # Breadcrumbs list
 *
 * Generuje listę breadcrumbsów
 *
 * {@link MaBreadcrumbsItemDirective} - (opcjonalnie) wskazuje custom template
 */
export declare class MaBreadcrumbsComponent implements OnInit {
    /** lista elementow przekazywanych do template breadcrumbsow */
    maItems: MaBreadcrumbsItems;
    itemTemplate: any;
    constructor();
    ngOnInit(): void;
}
