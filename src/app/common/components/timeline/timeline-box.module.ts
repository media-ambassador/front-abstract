import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaTimelineBoxComponent } from './timeline-box.component';
import { MaTimelineBoxYearComponent } from './timeline-box-year/timeline-box-year.component';
import { MaTimelineBoxItemComponent } from './timeline-box-item/timeline-box-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaTimelineBoxComponent,
    MaTimelineBoxYearComponent,
    MaTimelineBoxItemComponent
  ],
  exports: [
    MaTimelineBoxComponent,
    MaTimelineBoxYearComponent,
    MaTimelineBoxItemComponent
  ]
})
export class MaTimelineBoxModule { }
