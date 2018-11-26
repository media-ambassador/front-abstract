import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MaBreadcrumbsModule } from './common/components/breadcrumbs';
import { MaPreventOrphanPipe } from './common/pipes/prevent-orphan';
import { MaSliderModule } from './common/components/slider';
import { RotatorComponent } from './rotator/rotator.component';
import { MaAccordionModule } from './common/components/accordion/accordion.module';
import { PanelAccordionComponent } from './panel-accordion/panel-accordion.component';
import { MaRwdBreakpointsService } from './common/services/rwd-breakpoints/rwd-breakpoints.service';
import { TimelineComponent } from './timeline/timeline.component';
import { MaTimelineBoxModule } from './common/components/timeline';
import { MaApiModule } from './common/modules/api-module/api.module';
import { MaProcessingSpinnerDirective } from './common/directives/processing-spinner/processing-spinner.directive';
import { MaDynamicArticleModule } from './common/components/dynamic-article';

@NgModule({
  declarations: [
    AppComponent,

    MaPreventOrphanPipe,

    RotatorComponent,
    PanelAccordionComponent,
    TimelineComponent,
    MaProcessingSpinnerDirective
  ],
  imports: [
    BrowserModule,

    MaBreadcrumbsModule,
    MaSliderModule,
    MaAccordionModule,
    MaTimelineBoxModule,
    MaDynamicArticleModule.forRoot(),

    MaApiModule.forRoot({
      api: '//bigstar.local/api'
    })
  ],
  providers: [
    MaRwdBreakpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
