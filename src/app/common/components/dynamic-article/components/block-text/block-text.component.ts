import { Component, OnInit, Input } from '@angular/core';
import { MaBlockTextLayout } from './block-text.model';

@Component({
  selector: 'ma-block-text',
  templateUrl: './block-text.component.html',
  styleUrls: ['./block-text.component.scss']
})
export class MaBlockTextComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }



}
