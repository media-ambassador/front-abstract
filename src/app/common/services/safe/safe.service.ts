import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
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
import { MaApiResponse } from '../../modules/api-module';

@Injectable()
export class MaSafeService {
  protected cartSafeListSubject$: ReplaySubject<MaApiCartListResponse>;
  protected cartSafeList: MaApiCartListResponse;

  constructor(protected apiSafeService: MaApiSafeService,
              protected authService: MaAuthService) {

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

  addAllToCart(removeAll = false): Observable<MaApiResponse> {
    return this.apiSafeService.addAllToCart(removeAll).pipe(
      tap(response => {
        if (response.action_status && removeAll) {
          this.refreshCartSafeList();
        }
      })
    );
  }

  removeElement(productId: number): Observable<MaApiSetItemResponse> {
    return this.addElement(productId, 0);
  }

  changeQuantity(productId: number, quantity: number): Observable<MaApiSetItemResponse> {
    const itemData: MaApiSetItemData = {
      product_id: productId,
      quantity: quantity
    };

    return this.apiSafeService.setItem(itemData).pipe(
      tap(() =>  this.refreshCartSafeList()));
  }

  changeSize(oldProductId: number, newProductId: number, quantity: number): Observable<MaApiSetItemResponse> {
    const itemData: MaApiSetItemData = {
      product_id: newProductId,
      quantity: quantity
    };

    this.removeElement(oldProductId).subscribe();

    return this.apiSafeService.setItem(itemData).pipe(
      tap(() => this.refreshCartSafeList()));
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
