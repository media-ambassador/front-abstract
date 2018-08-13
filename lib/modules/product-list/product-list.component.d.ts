import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MaProductListService } from './product-list-service';
export declare class MaProductListComponent implements OnInit, OnDestroy {
    productListUtils: MaProductListService;
    protected productListOptionSubscription: Subscription;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
