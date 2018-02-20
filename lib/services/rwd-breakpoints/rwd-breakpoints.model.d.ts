import { BehaviorSubject } from "rxjs/BehaviorSubject";
export interface MaRwdBreakpoint {
    minSize: number;
    subject: BehaviorSubject<boolean>;
}
export interface MaRwdBreakpoints {
    default: MaRwdBreakpoint;
    desktopDevices: MaRwdBreakpoint;
    laptopDevices: MaRwdBreakpoint;
    laptopSmallDevices: MaRwdBreakpoint;
    tabletDevices: MaRwdBreakpoint;
    tabletSmallDevices: MaRwdBreakpoint;
    phoneDevices: MaRwdBreakpoint;
    phoneSmallDevices: MaRwdBreakpoint;
}
