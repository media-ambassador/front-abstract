import { NgModule, APP_INITIALIZER, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaDynamicArticleComponent } from './dynamic-article.component';
import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaBlockTextComponent } from './components/block-text/block-text.component';
import { MaDynamicArticleFactoryGenerator } from './dynamic-article-factory-generator/dynamic-article-factory-generator';
import { MaDynamicArticleDeclarationFactory, MaComponentDeclarations } from './component-declarations/declarations';
import { MaTwoColumnsTextComponent } from './components/two-columns-text/two-columns-text.component';

const ComponentDeclarationsName = 'ComponentDeclarationsNameRef';

export function articleDeclarationFactory(factoryService: MaDynamicArticleFactoryService,
                                          factoryGenerator: MaDynamicArticleFactoryGenerator,
                                          injector: Injector) {
  return  () => {
    const customDeclaration = injector.get(ComponentDeclarationsName);
    MaDynamicArticleDeclarationFactory(factoryService, factoryGenerator, customDeclaration);
  };
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaDynamicArticleComponent,

    MaBlockTextComponent,
    MaTwoColumnsTextComponent
  ],
  providers: [
    MaDynamicArticleFactoryService,
    { provide: MaDynamicArticleFactoryGenerator, useClass: MaDynamicArticleFactoryGenerator},
  ],
  exports: [
    MaDynamicArticleComponent,

  ],
  entryComponents: [
    MaBlockTextComponent,
    MaTwoColumnsTextComponent
  ]
})
export class MaDynamicArticleModule {
  static forRoot(customDeclaration: MaComponentDeclarations = {}): ModuleWithProviders {
    return {
      ngModule: MaDynamicArticleModule,
      providers: [
        { provide: ComponentDeclarationsName, useValue: customDeclaration },
        {
          provide: APP_INITIALIZER,
          useFactory: articleDeclarationFactory,
          deps: [ MaDynamicArticleFactoryService, MaDynamicArticleFactoryGenerator, Injector ],
          multi: true
        }
      ]
    };
  }
}
