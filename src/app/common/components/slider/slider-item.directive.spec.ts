import { MaSliderModule } from './slider.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaSliderItemDirective } from './slider-item.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';

describe('SliderItemDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaSliderModule
      ],
      declarations: [
        SlideItemComponent
      ]
    })
    .compileComponents();
  }));

  it('should create an instance', () => {
    const directive = new MaSliderItemDirective();
    expect(directive).toBeTruthy();
  });

  describe('SliderItemDirective', () => {
    let fixture: ComponentFixture<SlideItemComponent>;
    let component: SlideItemComponent;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(SlideItemComponent);
      component = fixture.componentInstance;
    }));

    it('property active = false', () => {
      expect(component.itemDirective.active).toBeFalsy();
    });

    describe('after SliderItemDirective.setActive(true)', () => {
      beforeEach(async(() => {
        component.itemDirective.setActive(true);
      }));

      it('property active = true', () => {
        expect(component.itemDirective.active).toBeTruthy();
      });

    });
  });

});


@Component({
  template: `<div maSliderItem></div>`
})
export class SlideItemComponent {
  @ViewChild(MaSliderItemDirective) itemDirective: MaSliderItemDirective;
}
