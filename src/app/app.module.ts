import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MaBreadcrumbsModule } from '../../lib/components/breadcrumbs';

import { MaPreventOrphanPipe } from './pipes/prevent-orphan';

@NgModule({
  declarations: [
    AppComponent,

    MaPreventOrphanPipe
  ],
  imports: [
    BrowserModule,

    MaBreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
