import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { MaProductListOptions } from './product-list.model';

import * as _ from 'lodash';

export class MaProductListService {
  readonly defaultOptions: MaProductListOptions = {
    page: 1,
    pageSize: 48,
    sortType: 'nhl',
    attributes: null,
    brands: null,
    price: null
  };

  private options: MaProductListOptions = Object.assign({}, this.defaultOptions);

  optionsSubject$: ReplaySubject<MaProductListOptions>;

  constructor(opt: MaProductListOptions = {}) {
    this.optionsSubject$ = new ReplaySubject<MaProductListOptions>(1);
    this.updateOptions(opt);
  }

  watchOptions(): Observable<MaProductListOptions> {
    return this.optionsSubject$.asObservable();
  }

  updateOptions(opt: MaProductListOptions): void {
    this.options = _.extend(this.options, opt);
    this.optionsSubject$.next(this.options);
  }

  setDefaultOptions(id: string): void {
    this.options = Object.assign(this.defaultOptions, { id: id });
    this.optionsSubject$.next(this.options);
  }
}
