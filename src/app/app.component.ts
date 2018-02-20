import { Component, HostListener } from '@angular/core';
import { MaRwdBreakpointsService } from './common/services/rwd-breakpoints/rwd-breakpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   
  constructor(private rwdBreakpointsService: MaRwdBreakpointsService) {
    this.rwdBreakpointsService.getRwdBreakpoint('tabletDevices').subscribe(isset => {
      console.log(isset);
    })
  }
}
