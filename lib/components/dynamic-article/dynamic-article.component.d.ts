import { OnInit, AfterViewInit, OnDestroy, ViewContainerRef, Injector } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleData } from './dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
export declare class MaDynamicArticleComponent implements OnInit, AfterViewInit, OnDestroy {
    protected injector: Injector;
    protected componentFactory: MaDynamicArticleFactoryService;
    blocks: MaDynamicArticleData<any>[];
    vc: ViewContainerRef;
    protected sub: Subscription;
    constructor(injector: Injector, componentFactory: MaDynamicArticleFactoryService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    createComponents(): void;
    ngOnDestroy(): void;
}
