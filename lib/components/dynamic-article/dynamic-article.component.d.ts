import { OnInit, AfterViewInit, OnDestroy, ViewContainerRef, Injector } from '@angular/core';
import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleData } from './dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
export declare class MaDynamicArticleComponent implements OnInit, AfterViewInit, OnDestroy {
    private injector;
    private componentFactory;
    blocks: MaDynamicArticleData<any>[];
    vc: ViewContainerRef;
    private sub;
    constructor(injector: Injector, componentFactory: MaDynamicArticleFactoryService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    createComponents(): void;
    ngOnDestroy(): void;
}
