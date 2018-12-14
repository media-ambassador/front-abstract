import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
export interface MaCheckoutStep {
    active: boolean;
    disabled: boolean;
    label?: string;
}
export declare class MaCheckoutStepCountService<CS extends MaCheckoutStep> {
    steps: CS[];
    protected stepSubject$: ReplaySubject<CS[]>;
    constructor();
    watchSteps(): Observable<CS[]>;
    updateOptions(steps: CS[]): void;
    activateStep(index: number): void;
    disableStep(index: number): void;
    enableStep(index: number): void;
}
