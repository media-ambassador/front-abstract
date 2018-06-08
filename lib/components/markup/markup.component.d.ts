import { OnInit } from '@angular/core';
/**
 * # MarkupComponent
 *
 * Umożliwia wstawienie markupu HTML bezpośrednio do kodu strony.
 * Usuwa tag &lt;script&gt;.
 */
export declare class MaMarkupComponent implements OnInit {
    innerHtml: any;
    /** Kod HTML do umieszczenia w innerHTML */
    maHtmlMarkup: string;
    private inited;
    private _innerHtml;
    constructor();
    ngOnInit(): void;
}
