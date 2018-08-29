import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MaRwdBreakpointsService } from '../common/services/rwd-breakpoints';
import { MaAccordionComponent } from '../common/components/accordion';

@Component({
  selector: 'ma-panel-accordion',
  templateUrl: './panel-accordion.component.html',
  styleUrls: ['./panel-accordion.component.scss']
})
export class PanelAccordionComponent implements AfterViewInit {

  @ViewChild(MaAccordionComponent) accordion: MaAccordionComponent;

  constructor() { }

  ngAfterViewInit(): void {
  }

}
