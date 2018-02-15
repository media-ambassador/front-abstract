import { maSliderCssClassNavNextActive } from './slider.model';
import { MaSliderModule } from './slider.module';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { MaSliderNavNextDirective } from './slider-nav-next.directive';

describe('SliderNavNextDirective', () => {
  let fixture: ComponentFixture<SlideNavNextComponent>;
  let component: SlideNavNextComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaSliderModule
      ],
      declarations: [
        SlideNavNextComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideNavNextComponent);
    component = fixture.componentInstance;

  }));

  it('should create an instance', () => {
    const directive = new MaSliderNavNextDirective();
    expect(directive).toBeTruthy();
  });

});

@Component({
  template: `<div [maSliderNavNext]="mockSlider"></div>`
})
export class SlideNavNextComponent {
  @ViewChild(MaSliderNavNextDirective) navNextDirective: MaSliderNavNextDirective;
  mockSlider = new class {
    wasNextClicked = false;
    slideNext() {
      this.wasNextClicked = true;
    }
  };
}
