import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  Injector,
  Input
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MaDynamicArticleFactoryService } from './dynamic-article-factory-resolver/dynamic-article-factory.service';
import { MaDynamicArticleData } from './dynamic-article-factory-resolver/dynamic-article-factory-resolver.model';
import { MaDynamicDeclarationService } from './dynamic-declaration.service';

@Component({
  selector: 'ma-dynamic-article',
  templateUrl: './dynamic-article.component.html',
  styleUrls: ['./dynamic-article.component.scss']
})
export class MaDynamicArticleComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() blocks: MaDynamicArticleData<any>[];

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  protected sub: Subscription;

  constructor(protected injector: Injector,
              protected componentFactory: MaDynamicArticleFactoryService,
              protected dynamicDeclarationService: MaDynamicDeclarationService ) {
  }

  ngOnInit() {
    this.createComponents();
  }

  ngAfterViewInit() {
  }

  createComponents() {
    if (!this.blocks) {
      return;
    }

    this.vc.clear();

    this.blocks.forEach(block => {
      setTimeout(() => {
        const componentFactory = this.componentFactory.resolveComponentFactory(block.layout);
        if (componentFactory) {
          this.vc.createComponent(componentFactory(this.injector, block));
        }
      }, 50);

    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
