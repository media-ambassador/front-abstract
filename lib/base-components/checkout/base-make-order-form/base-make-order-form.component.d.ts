import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MaAuthService } from '../../../services/auth';
import { MaCartService } from '../../../services/cart';
import { MaUtilsService } from '../../../services/utils';
import { MaGtmService } from '../../../services/gtm/gtm.service';
import { MaApiCartListData } from '../../../modules/api-module/api-cart';
import { MaApiUserService, MaApiUserData, MaApiUserAddressResponse } from '../../../modules/api-module/api-user';
export declare class MaBaseMakeOrderFormComponent<UD extends MaApiUserData, UAR extends MaApiUserAddressResponse<any, any>, CD extends MaApiCartListData<any, any, any, any, any, any, any>> implements OnInit, OnDestroy {
    protected apiUserService: MaApiUserService<any, any, any, any, any, any, any, any, any, any, any, any>;
    protected auth: MaAuthService<any, any, any, any, any, any, any, any, any, any>;
    protected cartService: MaCartService<any, any, any, any, any, any, any, any, any, any>;
    protected utilsService: MaUtilsService<any, any>;
    protected gtmService: MaGtmService<any, any>;
    protected router: Router;
    isGuest: boolean;
    userData: UD;
    makeOrderForm: FormGroup;
    makeOrderProcessing: boolean;
    addressData: UAR;
    shipmentChecked: boolean;
    invoiceChecked: boolean;
    registerPossibility: boolean;
    isUserExit: boolean;
    cartData: CD;
    baseClass: boolean;
    protected thankYouPagePath: string;
    protected subscription: Subscription;
    constructor(apiUserService: MaApiUserService<any, any, any, any, any, any, any, any, any, any, any, any>, auth: MaAuthService<any, any, any, any, any, any, any, any, any, any>, cartService: MaCartService<any, any, any, any, any, any, any, any, any, any>, utilsService: MaUtilsService<any, any>, gtmService: MaGtmService<any, any>, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected initOrderData(): void;
    protected readonly defaultAddressesForm: FormGroup;
    protected readonly defaultMakeOrderForm: FormGroup;
    getAddressFormGroup(name: string): FormGroup;
    setShippingAddress(id: string): void;
    setInvoiceAddress(id: string): void;
    shipmentUpdate(isChecked: boolean): void;
    invoiceUpdate(isChecked: boolean): void;
    setRegisterPossibility(isPossible: boolean): void;
    makeOrder(): void;
    protected handleErrorResponse(response: any): void;
    protected callOverallError(): void;
    protected callCartConvertedError(): void;
    protected handleValidationErrors(errors: any): void;
    protected handleMakeOrderSuccess(response: any): void;
    protected redirectAfterOrder(response: any): void;
    protected handleEmptyShippingId(): void;
    protected handleEmptyInvoiceId(): void;
    protected handleValidationError(): void;
}
