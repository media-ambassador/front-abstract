import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaBreadcrumbsComponent } from './breadcrumbs.component';
import { MaBreadcrumbsItemDirective } from './breadcrumbs-item.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MaBreadcrumbsComponent,
    MaBreadcrumbsItemDirective,
  ],
  exports: [
    MaBreadcrumbsComponent,
    MaBreadcrumbsItemDirective
  ]
})
export class MaBreadcrumbsModule { }
