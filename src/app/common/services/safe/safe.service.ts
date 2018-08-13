import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { MaApiSafeService } from '../../modules/api-module/api-safe/api-safe.service';
import { MaApiSafeCreateResponse } from '../../modules/api-module/api-safe/api-safe.model';
import {
  MaApiCartListResponse,
  MaApiSetItemData,
  MaApiSetItemResponse,
  MaApiCartListData
} from '../../modules/api-module/api-cart/api-cart.model';

import * as _ from 'lodash';
import { MaAuthService } from '../auth/auth.service';

@Injectable()
export class MaSafeService {
  private cartSafeListSubject$: ReplaySubject<MaApiCartListResponse>;
  private cartSafeList: MaApiCartListResponse;

  constructor(private apiSafeService: MaApiSafeService,
              private authService: MaAuthService,
              private cookieService: CookieService) {

    this.cartSafeListSubject$ = new ReplaySubject<MaApiCartListResponse>(1);
    this.authService.watchAuthorized().subscribe(() => this.refreshCartSafeList());
  }

  init(): Observable<MaApiSafeCreateResponse> {
    return this.apiSafeService.create().pipe(
      tap(() => {
        this.refreshCartSafeList();
      })
    );
  }

  refreshCartSafeList(): void {
    const subscription = this.apiSafeService.getList().subscribe(data => {
      subscription.unsubscribe();

      if (!data.action_status) {
        return;
      }

      this.cartSafeList = data;
      this.cartSafeListSubject$.next(data);
    });
  }

  watchCartSafeList(): Observable<MaApiCartListResponse> {
    return this.cartSafeListSubject$.asObservable();
  }

  getCartSafeData(): MaApiCartListData {
    return this.cartSafeList ? this.cartSafeList.data : null;
  }

  isInSafeList(productId: number): boolean {
    if (!this.cartSafeList || !this.cartSafeList.data.items) {
      return false;
    }

    let isFavorite = false;

    _.forEach(this.cartSafeList.data.items, item => {
      if (!isFavorite) {
        // tslint:disable-next-line:triple-equals
        isFavorite = parseInt(item.product_id, 10) == productId;
      }
    });

    return isFavorite;
  }

  addElement(productId: number, quantity = 1): Observable<MaApiSetItemResponse> {
    const itemData: MaApiSetItemData = {
      product_id: productId,
      quantity: quantity
    };

    return this.apiSafeService.setItem(itemData).pipe(
      tap(response => {
        if (response.action_status) {
          this.refreshCartSafeList();
        }
      })
    );
  }

  removeElement(productId: number): Observable<MaApiSetItemResponse> {
    return this.addElement(productId, 0);
  }

  clear(): void {
    const subscriber = this.apiSafeService.clear().subscribe(() => {
      this.refreshCartSafeList();
      subscriber.unsubscribe();
    });
  }

  reset() {
    this.refreshCartSafeList();
  }

}
