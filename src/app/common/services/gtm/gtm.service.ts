import { Injectable } from '@angular/core';


import * as _ from 'lodash';
import { MaApiCartListData, MaApiCartProduct } from '../../modules/api-module/api-cart';

@Injectable()
export class MaGtmService {

  protected dataLayer: any;
  protected referrer: any;

  constructor() {
  }

  init() {
    this.dataLayer = (window as any).dataLayer = (window as any).dataLayer || [];
    this.referrer = document.referrer;
  }

  gtmSendStateChange(path: string, referrer: string) {
    this.dataLayer.push({
      event: 'ngRouteChange',
      attributes: {
        page: path,
        referrer: referrer
      }
    });
  }

  gtmStateChangePush(page: string) {
    this.gtmSendStateChange(page, this.referrer);
    this.referrer = document.referrer;
  }

  gtmEcommercePush(orderData: MaApiCartListData, orderId: string) {
    if (_.isObject(orderData)) {
      let gtmProducts: any[] = [];
      if (_.isObject(orderData.items)) {
        gtmProducts = _.map(orderData.items, (orderItem: MaApiCartProduct) => {
          return {
            'sku': orderItem.sku,
            'name': orderItem.display_name,
            'category': orderItem.category_name,
            'price': orderItem.price.final.total.gross,
            'quantity': orderItem.quantity
          };
        });
      }

      const gtmPush = {
        event: 'ngEcommerce',
        'transactionId': orderId,
        'transactionAffiliation': 'Bytom',
        'transactionTotal': orderData.price.final.summary.gross,
        'transactionTax': orderData.price.final.components.items.tax,
        'transactionShipping':  orderData.price.final.components.delivery.gross,
        'transactionProducts': gtmProducts
      };

      this.dataLayer.push(gtmPush);
    }
  }

  gtmPushCustomEvent(event: string, category = '', label = '' ) {
    const gtmEventData = {
      event: event,
      category: category,
      label: label
    };

    this.dataLayer.push(gtmEventData);
  }

}
