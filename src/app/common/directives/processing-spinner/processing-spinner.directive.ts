import { Directive, ElementRef, AfterViewInit, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[maProcessingSpinner]'
})
export class MaProcessingSpinnerDirective implements AfterViewInit, OnChanges {
  @Input() maProcessingSpinner: boolean;
  @HostBinding('class.processing') isProcessed = false;

  constructor(protected element: ElementRef) { }

  ngOnChanges() {
    this.isProcessed = this.maProcessingSpinner;
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.insertAdjacentHTML('beforeend', `<span class="spinner"></span>`);
  }

}
