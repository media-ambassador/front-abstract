import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import extend from 'lodash/extend';

import { MaProductListOptions } from './product-list.model';

export class MaProductListService {
  protected readonly defaultOptions: MaProductListOptions = {
    page: 1,
    pageSize: 48,
    sortType: 'nhl',
    attributes: null,
    brands: null,
    price: null
  };

  protected options: MaProductListOptions = this.getDefaultOptions();

  optionsSubject$: ReplaySubject<MaProductListOptions>;

  constructor(opt: MaProductListOptions = {}) {
    this.optionsSubject$ = new ReplaySubject<MaProductListOptions>(1);
    this.updateOptions(opt);
  }

  watchOptions(): Observable<MaProductListOptions> {
    return this.optionsSubject$.asObservable();
  }

  updateOptions(opt: MaProductListOptions): void {
    this.options = extend(this.options, opt);
    this.optionsSubject$.next(this.options);
  }

  getDefaultOptions(): MaProductListOptions {
    return Object.assign({}, this.defaultOptions);
  }

  setDefaultOptions(id: string): void {
    this.options = Object.assign(this.defaultOptions, { id: id });
    this.optionsSubject$.next(this.options);
  }
}
