import { OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class MaYouTubeComponent implements OnInit {
    private sanitizer;
    content: string;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    getSafeUrl(): SafeResourceUrl;
}
