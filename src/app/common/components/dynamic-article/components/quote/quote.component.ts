import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class MaQuoteComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
