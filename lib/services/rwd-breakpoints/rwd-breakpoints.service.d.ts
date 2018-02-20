import { Observable } from 'rxjs/Observable';
import { MaRwdBreakpoints } from '.';
export declare class MaRwdBreakpointsService {
    private rwdBreakpoints;
    private currentBreakpoint;
    constructor();
    private emitRwdBreakpoints(name);
    private handleWindowSize(size);
    getRwdBreakpoint(name: keyof MaRwdBreakpoints): Observable<boolean>;
}
