import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

export interface MaCheckoutStep {
  active: boolean;
  disabled: boolean;
  label?: string;
}

@Injectable()
export class MaCheckoutStepCountService {
  steps: MaCheckoutStep[] = [];

  private stepSubject$: ReplaySubject<MaCheckoutStep[]>;

  constructor() {
    this.stepSubject$ = new ReplaySubject<MaCheckoutStep[]>(1);

    for (let i = 0; i < 3; i++) {
      this.steps.push({
        active: false,
        disabled: false,
        label: `checkoutStep.label.step${i}`
      });
    }

    this.stepSubject$.next(this.steps);
  }

  watchSteps(): Observable<MaCheckoutStep[]> {
    return this.stepSubject$.asObservable();
  }

  updateOptions(steps: MaCheckoutStep[]): void {
    this.steps = steps;
    this.stepSubject$.next(this.steps);
  }

  activateStep(index: number): void {
    if (index < 0 || index >= this.steps.length) {
      return;
    }

    this.steps.forEach((step, i) => {
      step.active = index === i;
    });
    this.stepSubject$.next(this.steps);
  }

  disableStep(index: number): void {
    if (index < 0 || index >= this.steps.length) {
      return;
    }

    this.steps[index].disabled = true;
    this.stepSubject$.next(this.steps);
  }

  enableStep(index: number): void {
    if (index < 0 || index >= this.steps.length) {
      return;
    }

    this.steps[index].disabled = false;
    this.stepSubject$.next(this.steps);
  }
}
