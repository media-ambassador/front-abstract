import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ma-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class MaYouTubeComponent implements OnInit {
  @Input() content: string;

  url: SafeResourceUrl;

  protected baseEmbedUrl = 'https://www.youtube.com/embed';

  constructor(protected sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!!this.content) {
      this.url = this.getSafeUrl();
    }
  }

  getSafeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseEmbedUrl}/${ this.content }`);
  }

}
