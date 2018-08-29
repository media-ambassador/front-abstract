import { OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class MaYouTubeComponent implements OnInit {
    protected sanitizer: DomSanitizer;
    content: string;
    url: SafeResourceUrl;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    getSafeUrl(): SafeResourceUrl;
}
