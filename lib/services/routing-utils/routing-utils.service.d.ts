import { Router } from '@angular/router';
export declare class MaRoutingUtilsService {
    protected router: Router;
    protected history: string[];
    constructor(router: Router);
    starSavesRoutingHistory(): void;
    getHistory(): string[];
    getPreviousUrl(): string;
    updatePreviewUrl(url: string): void;
}
