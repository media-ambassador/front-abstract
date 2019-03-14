import { Component, OnInit, OnDestroy, Host, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MaAuthService } from '../../../services/auth';
import { MaCartService } from '../../../services/cart';
import { MaUtilsService } from '../../../services/utils';
import { MaGtmService } from '../../../services/gtm/gtm.service';
import { MaApiCartListData } from '../../../modules/api-module/api-cart';
import { MaApiUserService, MaApiUserData, MaApiUserAddressResponse } from '../../../modules/api-module/api-user';

@Component({
  selector: 'ma-base-make-order-form',
  template: '',
  styles: ['']
})
export class MaBaseMakeOrderFormComponent<UD extends MaApiUserData,
                                          UAR extends MaApiUserAddressResponse<any, any>,
                                          CD extends MaApiCartListData<any, any, any, any, any, any, any> > implements OnInit, OnDestroy {

  isGuest = true;
  userData: UD;
  makeOrderForm: FormGroup;
  makeOrderProcessing = false;
  addressData: UAR = null;
  shipmentChecked = false;
  invoiceChecked = false;
  registerPossibility = false;
  isUserExit = false;
  cartData: CD;

  @HostBinding('class.base-make-order-form') baseClass = true;

  protected thankYouPagePath = 'dziekujemy';
  protected subscription = new Subscription();

  constructor(protected apiUserService: MaApiUserService<any, any, any, any, any, any, any, any, any, any, any, any>,
              protected auth: MaAuthService<any, any, any, any, any, any, any, any, any, any>,
              protected cartService: MaCartService<any, any, any, any, any, any, any, any, any, any>,
              protected utilsService: MaUtilsService<any, any>,
              protected gtmService: MaGtmService<any, any>,
              protected router: Router) { }

  ngOnInit() {
    this.isGuest = !this.auth.isAuthorized();
    this.userData = this.auth.getUserData();
    this.initOrderData();
    this.cartData = this.cartService.getCartData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected initOrderData() {
    this.makeOrderForm = this.defaultMakeOrderForm;
    if (this.isGuest) {
      this.makeOrderForm.addControl('addresses', this.defaultAddressesForm);
    } else {
      this.subscription.add(this.apiUserService.getAddressList().subscribe(response => {
        if (!!response.data && !!response.data.billing) {
          this.makeOrderForm.addControl('id', new FormControl(this.cartService.getCartId()));
          this.makeOrderForm.addControl('shipping_id', new FormControl(''));
          this.makeOrderForm.addControl('invoice_id', new FormControl(''));

          this.addressData = response;
        } else {
          this.makeOrderForm.addControl('addresses', this.defaultAddressesForm);
          (<FormGroup>this.makeOrderForm.get('addresses').get('billing')).controls.email.setValue(this.userData.login);
        }
      }));
    }
  }

  protected get defaultAddressesForm() {
    return new FormGroup({
      billing: this.utilsService.getDefaultAddressFormGroup(),
      shipping: this.utilsService.getDefaultAddressFormGroup(false),
      invoice: this.utilsService.getDefaultInvoiceFormGroup(false)
    });
  }

  protected get defaultMakeOrderForm() {
    return  new FormGroup({
      delivery_parcel_phone: new FormControl('', { validators: [] }),
      special_instruction: new FormControl(''),
      password: new FormControl('', { validators: [] }),
      accept_terms: new FormControl(false, { validators: [ Validators.required ] }),
      accept_newsletter: new FormControl(false, { validators: [] })
    });
  }

  getAddressFormGroup(name: string): FormGroup {
    const addressForm = this.makeOrderForm.controls['addresses'] as FormGroup;
    return !!addressForm && !!addressForm.controls[name] ? addressForm.controls[name] as FormGroup : null;
  }

  setShippingAddress(id: string) {
    if (id !== null && !!this.makeOrderForm.controls['shipping_id']) {
      this.makeOrderForm.controls['shipping_id'].setValue(id);
    }
  }

  setInvoiceAddress(id: string) {
    if (id !== null && !!this.makeOrderForm.controls['invoice_id']) {
      this.makeOrderForm.controls['invoice_id'].setValue(id);
    }
  }

  shipmentUpdate(isChecked: boolean) {
    this.shipmentChecked = isChecked;

    if (!this.isGuest) {
      this.shipmentChecked
        ? this.makeOrderForm.controls['shipping_id'].setValidators( [Validators.required ])
        : this.makeOrderForm.controls['shipping_id'].clearValidators();

      this.makeOrderForm.controls['shipping_id'].setValue(null);
    }
  }

  invoiceUpdate(isChecked: boolean) {
    this.invoiceChecked = isChecked;

    if (!this.isGuest) {
      this.invoiceChecked
        ? this.makeOrderForm.controls['invoice_id'].setValidators([Validators.required])
        : this.makeOrderForm.controls['invoice_id'].clearValidators();

      this.makeOrderForm.controls['invoice_id'].setValue(null);
    }
  }

  setRegisterPossibility(isPossible: boolean) {
    this.registerPossibility = isPossible;
  }

  makeOrder() {
    this.utilsService.markFormGroupTouched(this.makeOrderForm);

    if (!!this.shipmentChecked && !!this.makeOrderForm.controls['shipping_id'] && this.makeOrderForm.controls['shipping_id'].value === '') {
      this.handleEmptyShippingId();
      return;
    }

    if (this.invoiceChecked && !!this.makeOrderForm.controls['invoice_id'] && this.makeOrderForm.controls['invoice_id'].value === '') {
      this.handleEmptyInvoiceId();
      return;
    }

    if (this.makeOrderForm.valid) {
      const formValue = Object.assign({}, this.makeOrderForm.value);

      if (!this.shipmentChecked && formValue['addresses']) {
        delete formValue['addresses']['shipping'];
      }

      if (!this.invoiceChecked && formValue['addresses']) {
        delete formValue['addresses']['invoice'];
      }

      this.subscription.add(this.cartService.makeOrder(this.makeOrderForm.value).subscribe(
        response => {
          this.makeOrderProcessing = false;
          this.utilsService.setFormGroupEditable(this.makeOrderForm, true);

          response.action_status
            ? this.handleMakeOrderSuccess(response)
            : this.handleErrorResponse(response);
        },
        () => this.callOverallError(),
        () => {
          this.makeOrderProcessing = true;
          this.utilsService.setFormGroupEditable(this.makeOrderForm, false);
        }
      ));
    } else {
      this.handleValidationError();
    }
  }

  protected handleErrorResponse(response: any) {
    if (!!response.data.reload) {
      this.callCartConvertedError();
    } else if (response.data.validationErrors) {
      this.handleValidationErrors(response.data.validationErrors);
    } else {
      this.callOverallError();
    }
  }
  protected callOverallError() { }

  protected callCartConvertedError() {
    this.router.navigate(['/']);
  }

  protected handleValidationErrors(errors: any) {
    this.router.navigate(['/']);
  }

  protected handleMakeOrderSuccess(response: any) {
    this.gtmService.gtmEcommercePush(this.cartData, response.data.order_id);

    setTimeout(() => this.redirectAfterOrder(response), 200);
  }

  protected redirectAfterOrder(response: any) {
    !!response.data.redirectUrl && response.data.redirectUrl.length > 0
    ? window.location.replace(response.data.redirectUrl)
    : this.router.navigate([`/${this.thankYouPagePath}/${response.data.order_id}`]);
  }

  protected handleEmptyShippingId() {
    this.handleValidationError();
  }

  protected handleEmptyInvoiceId() {
    this.handleValidationError();
  }

  protected handleValidationError() {
    const invalidItem = document.querySelectorAll('.base-make-order-form .ng-invalid');
    if (!!invalidItem.length) {
      invalidItem.item(0).scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  }
}
