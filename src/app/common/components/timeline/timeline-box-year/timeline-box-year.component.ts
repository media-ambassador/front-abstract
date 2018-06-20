import { Component, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { MaTimelineBoxItemComponent } from '../timeline-box-item/timeline-box-item.component';

@Component({
  selector: 'ma-timeline-box-year',
  templateUrl: './timeline-box-year.component.html',
  styleUrls: ['./timeline-box-year.component.scss']
})
export class MaTimelineBoxYearComponent implements AfterContentInit {
  @Input() year: number = null;
  @ContentChildren(MaTimelineBoxItemComponent) timelineItems: QueryList<MaTimelineBoxItemComponent>;
  boxHeight: number;

  constructor() { }

  ngAfterContentInit() {
  }

  updateHeight(height: number, gap: number, separator: number) {
    this.timelineItems.forEach((timelineItem, index) =>  {
      timelineItem.updateHeight(height, index, gap);
      this.boxHeight = (height * ((100 - gap) / 100)) * (this.timelineItems.length + separator);
    });
  }

}
