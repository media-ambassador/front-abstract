import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MaApiOrderStatus } from '../../modules/api-module/api-order';
export declare class MaUtilsService {
    private router;
    constructor(router: Router);
    markFormGroupTouched(formGroup: FormGroup): void;
    setFormGroupEditable(formGroup: FormGroup, isEditable: boolean): void;
    getDateFromTimeStamp(timeStamp: number, format?: string): string;
    returnColorClass(status: MaApiOrderStatus): string;
    startsWith(start: string, code: string): boolean;
    moveToUrl(url: string): void;
}
