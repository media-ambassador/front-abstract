import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MaSliderComponent,
} from './slider.component';

import { MaSliderItemDirective } from './slider-item.directive';
import { MaSliderTopLayerDirective } from './slider-top-layer.directive';
import { MaSliderNavPrevDirective } from './slider-nav-prev.directive';
import { MaSliderNavNextDirective } from './slider-nav-next.directive';
import { MaSliderNavToDirective } from './slider-nav-to.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaSliderComponent,
    MaSliderItemDirective,
    MaSliderTopLayerDirective,
    MaSliderNavPrevDirective,
    MaSliderNavNextDirective,
    MaSliderNavToDirective,
  ],
  exports: [
    MaSliderComponent,
    MaSliderItemDirective,
    MaSliderTopLayerDirective,
    MaSliderNavPrevDirective,
    MaSliderNavNextDirective,
    MaSliderNavToDirective,
  ],
  providers: [
  ]
})
export class MaSliderModule {}
