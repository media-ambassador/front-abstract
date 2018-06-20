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

@NgModule({
  declarations: [
    AppComponent,

    MaPreventOrphanPipe,

    RotatorComponent,
    PanelAccordionComponent,
    TimelineComponent,

  ],
  imports: [
    BrowserModule,

    MaBreadcrumbsModule,
    MaSliderModule,
    MaAccordionModule,
    MaTimelineBoxModule
  ],
  providers: [
    MaRwdBreakpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
