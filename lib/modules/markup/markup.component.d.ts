import { Router } from '@angular/router';
import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MaMarkupUpdateInnerHtmlEvent } from './markup.model';
/**
 * # MarkupComponent
 *
 * Umożliwia wstawienie markupu HTML bezpośrednio do kodu strony.
 * Usuwa tag &lt;script&gt;.
 */
export declare class MaMarkupComponent implements OnInit {
    protected sanitizer: DomSanitizer;
    protected elementRef: ElementRef;
    protected router: Router;
    innerHtml: any;
    /** Kod HTML do umieszczenia w innerHTML */
    maHtmlMarkup: string;
    updateHtml: EventEmitter<MaMarkupUpdateInnerHtmlEvent>;
    protected initialized: boolean;
    protected _innerHtml: any;
    onClick(event: any): void;
    constructor(sanitizer: DomSanitizer, elementRef: ElementRef, router: Router);
    ngOnInit(): void;
}
