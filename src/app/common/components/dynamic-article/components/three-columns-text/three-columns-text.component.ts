import { Component, OnInit, Input } from '@angular/core';
import { MaThreeColumnsTextLayoutContent } from './three-columns-text.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ma-three-columns-text',
  templateUrl: './three-columns-text.component.html',
  styleUrls: ['./three-columns-text.component.scss']
})
export class MaThreeColumnsTextComponent implements OnInit {
  @Input() content: MaThreeColumnsTextLayoutContent;

  constructor() { }

  ngOnInit() {
  }

}
