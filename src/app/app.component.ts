import { Component, HostListener } from '@angular/core';
import { MaRwdBreakpointsService } from './common/services/rwd-breakpoints/rwd-breakpoints.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {}
}
