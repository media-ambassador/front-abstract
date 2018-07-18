import { Component, OnInit, Input } from '@angular/core';
import { MaTwoColumnsTextLayoutContent } from './two-columns-text.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ma-two-columns-text',
  templateUrl: './two-columns-text.component.html',
  styleUrls: ['./two-columns-text.component.scss']
})
export class MaTwoColumnsTextComponent implements OnInit {
  @Input() content: MaTwoColumnsTextLayoutContent;

  constructor() { }

  ngOnInit() {
  }

}
