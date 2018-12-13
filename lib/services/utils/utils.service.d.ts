import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MaApiOrderStatus } from '../../modules/api-module/api-order';
import { MaStreetAddressData } from '.';
export declare class MaUtilsService<OS extends MaApiOrderStatus, AD extends MaStreetAddressData> {
    protected router: Router;
    constructor(router: Router);
    markFormGroupTouched(formGroup: FormGroup): void;
    setFormGroupEditable(formGroup: FormGroup, isEditable: boolean): void;
    getDateFromTimeStamp(timeStamp: number, format?: string): string;
    returnColorClass(status: OS): string;
    startsWith(start: string, code: string): boolean;
    moveToUrl(url: string): void;
    getFullStreetAddress(data: AD): string;
    checkFileExist(url: string): Observable<boolean>;
    isSupportActive(hourFrom: number, hourTo: number): boolean;
}
