import { Component, OnInit, Input, ContentChildren, AfterContentInit, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { MaTimelineBoxYearComponent } from './timeline-box-year/timeline-box-year.component';

@Component({
  selector: 'ma-timeline-box',
  templateUrl: './timeline-box.component.html',
  styleUrls: ['./timeline-box.component.scss']
})
export class MaTimelineBoxComponent implements AfterContentInit {
  @Input() timelineHeight = 300;
  @Input() transitionY = 30;
  @Input() yearSeparator = 0.8;
  @ContentChildren(MaTimelineBoxYearComponent) timelineYears: QueryList<MaTimelineBoxYearComponent>;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngAfterContentInit() {
    setTimeout(() => {
      this.timelineYears.forEach((timelineYear, index, arr) =>  {
        if ( arr.length !== index + 1) {
          timelineYear.updateHeight(this.timelineHeight, this.transitionY, this.yearSeparator);
        } else {
          timelineYear.updateHeight(this.timelineHeight, this.transitionY, 0);
        }
      });
    }, 0);

    this.renderer.setStyle(this.el.nativeElement, 'padding-bottom', `${this.timelineHeight * (this.transitionY / 100 )}px`);
  }
}
