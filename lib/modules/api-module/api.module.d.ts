import { ModuleWithProviders } from '@angular/core';
import { MaApiModuleConfig } from './api-common.model';
export declare class MaApiModule {
    constructor(parentModule: MaApiModule);
    static forRoot(config: MaApiModuleConfig): ModuleWithProviders;
}
