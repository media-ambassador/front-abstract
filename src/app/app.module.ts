import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MaBreadcrumbsModule } from './common/components/breadcrumbs';
import { MaPreventOrphanPipe } from './common/pipes/prevent-orphan';
import { MaSliderModule } from './common/components/slider';
import { RotatorComponent } from './rotator/rotator.component';
import { MaAccordionModule } from './common/components/accordion/accordion.module';
import { PanelAccordionComponent } from './panel-accordion/panel-accordion.component';

@NgModule({
  declarations: [
    AppComponent,

    MaPreventOrphanPipe,

    RotatorComponent,
    PanelAccordionComponent,

  ],
  imports: [
    BrowserModule,

    MaBreadcrumbsModule,
    MaSliderModule,
    MaAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
