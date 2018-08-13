import { Router } from '@angular/router';
export declare class MaRoutingUtilsService {
    private router;
    private history;
    constructor(router: Router);
    starSavesRoutingHistory(): void;
    getHistory(): string[];
    getPreviousUrl(): string;
    updatePreviewUrl(url: string): void;
}
