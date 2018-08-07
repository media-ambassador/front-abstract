import { Component, OnInit, Input } from '@angular/core';
import { MaImageLayoutContent } from './image.model';

@Component({
  selector: 'ma-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class MaImageComponent implements OnInit {
  @Input() content: MaImageLayoutContent;

  constructor() { }

  ngOnInit() {
  }

}
