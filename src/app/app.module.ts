import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MaBreadcrumbsModule } from './common/components/breadcrumbs';
import { MaPreventOrphanPipe } from './common/pipes/prevent-orphan';
import { MaSliderModule } from './common/components/slider';
import { RotatorComponent } from './rotator/rotator.component';

@NgModule({
  declarations: [
    AppComponent,

    MaPreventOrphanPipe,

    RotatorComponent
  ],
  imports: [
    BrowserModule,

    MaBreadcrumbsModule,
    MaSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
