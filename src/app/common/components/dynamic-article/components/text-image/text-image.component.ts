import { Component, OnInit, Input } from '@angular/core';
import { MaTextImageLayoutContent } from './text-image.model';

@Component({
  selector: 'ma-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class MaTextImageComponent implements OnInit {
  @Input() content: MaTextImageLayoutContent;

  constructor() { }

  ngOnInit() {
  }

}
