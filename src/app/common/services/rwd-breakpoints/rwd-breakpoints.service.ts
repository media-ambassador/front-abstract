import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { MaRwdBreakpoints } from '.';

@Injectable()
export class MaRwdBreakpointsService {
  private rwdBreakpoints: MaRwdBreakpoints = {
    default: { minSize: 99999, subject: new BehaviorSubject<boolean>(true) },
    desktopDevices: { minSize: 1540, subject: new BehaviorSubject<boolean>(true) },
    laptopDevices: { minSize: 1366, subject: new BehaviorSubject<boolean>(true) },
    laptopSmallDevices: { minSize: 1200, subject: new BehaviorSubject<boolean>(true) },
    tabletDevices: { minSize: 1024, subject: new BehaviorSubject<boolean>(true) },
    tabletSmallDevices: { minSize: 768, subject: new BehaviorSubject<boolean>(true) },
    phoneDevices: { minSize: 500, subject: new BehaviorSubject<boolean>(true) },
    phoneSmallDevices: { minSize: 320, subject: new BehaviorSubject<boolean>(true) }
  };

  constructor() {
    this.handleWindowSize(window.innerWidth);
    window.addEventListener('resize', (event: any) => this.handleWindowSize(event.target.innerWidth), false);
  }

  private emitRwdBreakpoints(name: keyof MaRwdBreakpoints, value: boolean) {
    this.rwdBreakpoints[name].subject.next(value);
  }

  private handleWindowSize(size: number) {
    _.forOwn(this.rwdBreakpoints, (breakpoint, key: keyof MaRwdBreakpoints) => {
      size > breakpoint.minSize
        ? this.emitRwdBreakpoints(key, false)
        : this.emitRwdBreakpoints(key, true);
    });
  }

  getRwdBreakpoint(name: keyof MaRwdBreakpoints): Observable<boolean> {
    return this.rwdBreakpoints[name].subject.asObservable();
  }



}
