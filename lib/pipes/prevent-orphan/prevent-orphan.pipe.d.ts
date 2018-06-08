import { PipeTransform } from '@angular/core';
export declare class MaPreventOrphanPipe implements PipeTransform {
    private regex;
    private replacement;
    transform(value: string, args?: any): any;
}
