import { MaDynamicComponentFactory, MaDynamicArticleType } from './dynamic-article-factory-resolver.model';
export declare class MaDynamicArticleFactoryService {
    protected factoryMap: Map<MaDynamicArticleType, MaDynamicComponentFactory<any>>;
    registerFactory(componentName: MaDynamicArticleType, componentFactory: MaDynamicComponentFactory<any>): void;
    hasFactory(componentName: MaDynamicArticleType): boolean;
    resolveComponentFactory(componentName: MaDynamicArticleType): MaDynamicComponentFactory<any>;
    constructor();
}
