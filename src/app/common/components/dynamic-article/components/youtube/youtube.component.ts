import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ma-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class MaYouTubeComponent implements OnInit {
  @Input() content: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getSafeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${ this.content }`);
  }

}
