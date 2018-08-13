import { Observable } from 'rxjs/Observable';
export interface MaCheckoutStep {
    active: boolean;
    disabled: boolean;
    label?: string;
}
export declare class MaCheckoutStepCountService {
    steps: MaCheckoutStep[];
    private stepSubject$;
    constructor();
    watchSteps(): Observable<MaCheckoutStep[]>;
    updateOptions(steps: MaCheckoutStep[]): void;
    activateStep(index: number): void;
    disableStep(index: number): void;
    enableStep(index: number): void;
}
