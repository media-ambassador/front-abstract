import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaMarkupComponent } from './markup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaMarkupComponent
  ],
  exports: [
    MaMarkupComponent
  ]
})
export class MaMarkupModule { }
