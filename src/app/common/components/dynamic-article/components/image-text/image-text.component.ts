import { Component, OnInit, Input } from '@angular/core';
import { MaImageTextLayoutContent } from './image-text.model';

@Component({
  selector: 'ma-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class MaImageTextComponent implements OnInit {
  @Input() content: MaImageTextLayoutContent;

  constructor() { }

  ngOnInit() {
  }

}
