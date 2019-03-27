import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import forEach from 'lodash/forEach';

import { MaApiSafeService } from '../../modules/api-module/api-safe/api-safe.service';
import { MaApiSafeCreateResponse } from '../../modules/api-module/api-safe/api-safe.model';
import {
  MaApiCartListResponse,
  MaApiSetItemData,
  MaApiSetItemResponse,
  MaApiCartListData
} from '../../modules/api-module/api-cart/api-cart.model';

import { MaAuthService } from '../auth/auth.service';
import { MaApiResponse } from '../../modules/api-module';
import { MaApiProductVariation, MaApiProductAttribute, MaApiProductImage } from '../../modules/api-module/api-product/api-product.model';
import { MaApiShopData } from '../../modules/api-module/api-shop';

@Injectable()
export class MaSafeService<CR extends MaApiCartListResponse<any>,
                           IR extends MaApiSetItemResponse<MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>,
                           ID extends MaApiSetItemData,
                           SCR extends MaApiSafeCreateResponse,
                           CL extends MaApiCartListData<any, any, any, any, any, any, any>,
                           R extends MaApiResponse> {
  protected cartSafeListSubject$: ReplaySubject<CR>;
  protected cartSafeList: CR;

  constructor(protected apiSafeService: MaApiSafeService<CR, IR, SCR, R>,
              protected authService: MaAuthService<any, any, any, any, any, any, any, any, any, any>) {

    this.cartSafeListSubject$ = new ReplaySubject<CR>(1);
    this.authService.watchAuthorized().subscribe(() => this.refreshCartSafeList());
  }

  init(): Observable<SCR> {
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

  watchCartSafeList(): Observable<CR> {
    return this.cartSafeListSubject$.asObservable();
  }

  getCartSafeData(): CL {
    return this.cartSafeList ? this.cartSafeList.data : null;
  }

  isInSafeList(productId: number): boolean {
    if (!this.cartSafeList || !this.cartSafeList.data.items) {
      return false;
    }

    let isFavorite = false;

    forEach(this.cartSafeList.data.items, item => {
      if (!isFavorite) {
        // tslint:disable-next-line:triple-equals
        isFavorite = parseInt(item.product_id, 10) == productId;
      }
    });

    return isFavorite;
  }

  addElement(productId: number, quantity = 1): Observable<IR> {
    const itemData = {
      product_id: productId,
      quantity: quantity
    } as ID;

    return this.apiSafeService.setItem(itemData).pipe(
      tap(response => {
        if (response.action_status) {
          this.refreshCartSafeList();
        }
      })
    );
  }

  addAllToCart(removeAll = false): Observable<R> {
    return this.apiSafeService.addAllToCart(removeAll).pipe(
      tap(response => {
        if (response.action_status && removeAll) {
          this.refreshCartSafeList();
        }
      })
    );
  }

  removeElement(productId: number): Observable<IR> {
    return this.addElement(productId, 0);
  }

  changeQuantity(productId: number, quantity: number): Observable<IR> {
    const itemData = {
      product_id: productId,
      quantity: quantity
    } as ID;

    return this.apiSafeService.setItem(itemData).pipe(
      tap(() =>  this.refreshCartSafeList()));
  }

  changeSize(oldProductId: number, newProductId: number, quantity: number): Observable<IR> {
    const itemData = {
      product_id: newProductId,
      quantity: quantity
    } as ID;

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
