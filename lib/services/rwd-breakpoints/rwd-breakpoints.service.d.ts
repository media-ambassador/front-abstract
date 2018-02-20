import { Observable } from 'rxjs/Observable';
import { MaRwdBreakpoints } from '.';
export declare class MaRwdBreakpointsService {
    private rwdBreakpoints;
    constructor();
    private emitRwdBreakpoints(name, value);
    private handleWindowSize(size);
    getRwdBreakpoint(name: keyof MaRwdBreakpoints): Observable<boolean>;
}
