import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class MaRoutingUtilsService {
  protected history: string[] = [];

  constructor(protected router: Router) { }

  public starSavesRoutingHistory(): void {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((data: NavigationEnd) => {
        this.history = [...this.history, data.url];
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || null;
  }

  public updatePreviewUrl(url: string): void {
    this.history[this.history.length - 1] = url;
  }
}
