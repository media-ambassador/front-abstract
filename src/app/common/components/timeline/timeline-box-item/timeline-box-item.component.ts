import { Component, OnInit, Input, ElementRef, Renderer2, HostBinding} from '@angular/core';
import { MaTimelineBoxItemSide } from '..';

@Component({
  selector: 'ma-timeline-box-item',
  templateUrl: './timeline-box-item.component.html',
  styleUrls: ['./timeline-box-item.component.scss']
})
export class MaTimelineBoxItemComponent implements OnInit {
  private timelineHeight = 300;

  @Input() itemSide: MaTimelineBoxItemSide = 'left';
  @HostBinding('class.left') isLeftSide = false;
  @HostBinding('class.right') isRightSide = false;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.isLeftSide = this.itemSide === 'left';
    this.isRightSide = !this.isLeftSide;
  }

  updateHeight(height: number, index: number, gap: number) {
    this.timelineHeight = height;
    const translateNum = -gap * index + '%';
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(' + translateNum + ')');
  }

  getItemHeight(): number {
    return this.timelineHeight;
  }
}
