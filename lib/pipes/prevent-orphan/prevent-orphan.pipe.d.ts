import { PipeTransform } from '@angular/core';
export declare class MaPreventOrphanPipe implements PipeTransform {
    protected regex: RegExp;
    protected replacement: string;
    transform(value: string, args?: any): any;
}
