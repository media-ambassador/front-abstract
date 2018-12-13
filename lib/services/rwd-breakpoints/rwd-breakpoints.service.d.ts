import { Observable } from 'rxjs/Observable';
import { MaRwdBreakpoints } from '.';
export declare class MaRwdBreakpointsService {
    protected rwdBreakpoints: MaRwdBreakpoints;
    constructor();
    protected emitRwdBreakpoints(name: keyof MaRwdBreakpoints, value: boolean): void;
    protected handleWindowSize(size: number): void;
    getRwdBreakpoint(name: keyof MaRwdBreakpoints): Observable<boolean>;
}
