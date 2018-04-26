import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MaRwdBreakpointsService } from '../common/services/rwd-breakpoints';
import { MaAccordionComponent } from '../common/components/accordion';

@Component({
  selector: 'ma-panel-accordion',
  templateUrl: './panel-accordion.component.html',
  styleUrls: ['./panel-accordion.component.scss']
})
export class PanelAccordionComponent implements AfterViewInit {

  lockDescription = true;
  
  @ViewChild(MaAccordionComponent) accordion: MaAccordionComponent;

  constructor(private rwdBreakpointsService: MaRwdBreakpointsService) { }

  ngAfterViewInit(): void {
   this.rwdBreakpointsService.getRwdBreakpoint('tabletSmallDevices').subscribe(isBreakpoint => this.updateAccordion(isBreakpoint));
  }

  updateAccordion(isMobile: boolean) {
    setTimeout(() => {
      if (isMobile) {
        this.lockDescription = false;
        this.accordion.closeAll(true);
      } else {
        this.lockDescription = true;
        this.accordion.showAll(true);
      }
    }, 100);
  }

}
