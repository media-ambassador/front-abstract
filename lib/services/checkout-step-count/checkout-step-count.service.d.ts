import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
export interface MaCheckoutStep {
    active: boolean;
    disabled: boolean;
    label?: string;
}
export declare class MaCheckoutStepCountService {
    steps: MaCheckoutStep[];
    protected stepSubject$: ReplaySubject<MaCheckoutStep[]>;
    constructor();
    watchSteps(): Observable<MaCheckoutStep[]>;
    updateOptions(steps: MaCheckoutStep[]): void;
    activateStep(index: number): void;
    disableStep(index: number): void;
    enableStep(index: number): void;
}
