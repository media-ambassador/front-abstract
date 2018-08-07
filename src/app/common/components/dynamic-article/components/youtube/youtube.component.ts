import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class MaYouTubeComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
