import { Directive, ElementRef, AfterViewInit, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[maProcessingSpinner]'
})
export class MaProcessingSpinnerDirective implements AfterViewInit, OnChanges {
  @Input() bsProcessingSpinner: boolean;
  @HostBinding('class.processing') isProcessed = false;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    this.isProcessed = this.bsProcessingSpinner;
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.insertAdjacentHTML('beforeend', `<span class="spinner"></span>`);
  }

}
