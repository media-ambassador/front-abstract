import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { MaProductListOptions } from './product-list.model';
export declare class MaProductListService {
    protected readonly defaultOptions: MaProductListOptions;
    protected options: MaProductListOptions;
    optionsSubject$: ReplaySubject<MaProductListOptions>;
    constructor(opt?: MaProductListOptions);
    watchOptions(): Observable<MaProductListOptions>;
    updateOptions(opt: MaProductListOptions): void;
    getDefaultOptions(): MaProductListOptions;
    setDefaultOptions(id: string): void;
}
