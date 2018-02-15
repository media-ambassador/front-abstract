import { MaSliderNavToDirective } from './slider-nav-to.directive';
import { maSliderCssClassItemActive, MaSliderNavTo, maSliderCssClassNavNextActive, maSliderCssClassTopLayer } from './slider.model';
import { maSliderCssClassItem, maSliderCssClassNavPrevActive } from './slider.component';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { MaSliderNavPrevDirective } from './slider-nav-prev.directive';
import { MaSliderNavNextDirective } from './slider-nav-next.directive';
import { MaSliderModule } from './slider.module';
import { Component, OnInit, Type } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSliderComponent, MaSliderState } from './slider.component';
import { COMPONENT_VARIABLE } from '@angular/platform-browser/src/dom/dom_renderer';
import { By } from '@angular/platform-browser';
import { MaSliderItemDirective } from './slider-item.directive';
import { combineAll } from 'rxjs/operators/combineAll';
import { MaSliderTopLayerDirective } from './slider-top-layer.directive';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { click, ButtonClickEvents} from '../../testing/index';

class Page<C, T extends Type<C>> {
  public fixture: ComponentFixture<C>;
  public component: C;

  constructor(public testBed: typeof TestBed, classInstance: Type<C>) {
    this.fixture = this.testBed.createComponent(classInstance);
    this.component = this.fixture.componentInstance;
  }
}

interface SliderPageOptions {
  slidesCount: number;
}
class SliderPage <C> extends Page<C, Type<C>> {
  slider: MaSliderComponent;
  slidesEl: DebugElement[];
  topLayerEl: DebugElement;
  navPrevEl: DebugElement;
  navNextEl: DebugElement;
  navToElList: DebugElement[];
  state: MaSliderState;

  constructor(testBed: typeof TestBed, classInstance: Type<C>, public options: SliderPageOptions) {
    super(testBed, classInstance);

    this.slider = this.fixture.debugElement.query(By.directive(MaSliderComponent)).componentInstance;
    this.slider.state$.subscribe(state => this.state = state);

    this.fixture.detectChanges();
    this.fixture.whenStable().then(() => {
      this.addPageElements();
    });
  }

  addPageElements() {
    this.slidesEl = this.fixture.debugElement.queryAll(By.directive(MaSliderItemDirective));
    this.topLayerEl = this.fixture.debugElement.query(By.directive(MaSliderTopLayerDirective));
    this.navPrevEl = this.fixture.debugElement.query(By.directive(MaSliderNavPrevDirective));
    this.navNextEl = this.fixture.debugElement.query(By.directive(MaSliderNavNextDirective));
    this.navToElList = this.fixture.debugElement.queryAll(By.directive(MaSliderNavToDirective));
  }
}

function createPage<C>(classInstance: Type<C>, options: SliderPageOptions) {
  return new SliderPage<C>(TestBed, classInstance, options);
}

describe('SliderComponent;', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaSliderModule
      ],
      declarations: [
        SliderWithOneSlideComponent,
        SliderWithThreeSlidesComponent,
        SliderWithThreeSlidesAndNavigationComponent,
        SliderWithThreeSlidesAndPaginationComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
  });

  describe('Slider with one slide;', () => {
    const pageRef = {page: undefined};
    let page: SliderPage<SliderWithOneSlideComponent>;

    beforeEach(async(() => {
      page = createPage(SliderWithOneSlideComponent, {slidesCount: 1});
      pageRef.page = page;
    }));

    it('should create an instance', () => {
      expect(page.component).toBeTruthy();
    });

    it('should state.initialized = true', () => {
      expect(page.state.initialized).toBeTruthy();
    });

    it('should have only one slide (elements with maSliderItemDirective)', () => {
      expect(page.slidesEl.length).toEqual(1);
    });

    it('should NOT have topLayer', () => {
      expect(page.topLayerEl === null).toBeTruthy();
    });

    it('should NOT have navPrev', () => {
      expect(page.navPrevEl === null).toBeTruthy();
    });

    it('should NOT have navNext', () => {
      expect(page.navNextEl === null).toBeTruthy();
    });

    atSlideEach(pageRef);
    atSlideFirst(pageRef);
    atSlideLast(pageRef);
    atSlideNo(pageRef, 0);

    describe('After slidePrev() at slide 0', () => {

      beforeEach(async(() => {
        page.slider.slidePrev();
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideLast(pageRef);
      atSlideNo(pageRef, 0);
    });

    describe('After slideNext() at slide 0', () => {

      beforeEach(async(() => {
        page.slider.slideNext();
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideLast(pageRef);
      atSlideNo(pageRef, 0);

    });

    describe('After slideTo(0) at slide 0', () => {

      beforeEach(async(() => {
        page.slider.slideTo(0);
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideLast(pageRef);
      atSlideNo(pageRef, 0);
    });

    describe('After slideTo(1) at slide 0', () => {

      beforeEach(async(() => {
        page.slider.slideTo(0);
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideLast(pageRef);
      atSlideNo(pageRef, 0);
    });

    describe('After slideTo(-1) at slide 0', () => {

      beforeEach(async(() => {
        page.slider.slideTo(0);
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideLast(pageRef);
      atSlideNo(pageRef, 0);
    });


  });

  describe('Slider with three slides;', () => {
    let page: SliderPage<SliderWithThreeSlidesComponent>;
    const pageRef = {page: undefined};

    beforeEach(async(() => {
      page = createPage(SliderWithThreeSlidesComponent, {slidesCount: 3});
      pageRef.page = page;
    }));

    beforeEach(() => {
    });

    it('should create an instance', () => {
      expect(page.component).toBeTruthy();
    });

    it('should state.initialized = true', () => {
      expect(page.state.initialized).toBeTruthy();
    });

    it(`should have page.options.slidesCount slides (elements with maSliderItemDirective)`, () => {
      expect(page.slidesEl.length).toEqual(page.options.slidesCount);
    });

    it('should NOT have topLayer', () => {
      expect(page.topLayerEl === null).toBeTruthy();
    });

    it('should NOT have navPrev', () => {
      expect(page.navPrevEl === null).toBeTruthy();
    });

    it('should NOT have navNext', () => {
      expect(page.navNextEl === null).toBeTruthy();
    });

    atSlideEach(pageRef);
    atSlideFirst(pageRef);
    atSlideNo(pageRef, 0);

    describe('After slidePrev() - at slide 0', () => {

      beforeEach(async(() => {
        page.slider.slidePrev();
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideNoLast(pageRef);
      atSlideNo(pageRef, 0);

    });

    describe('After slideNext() at slide 0', () => {

      beforeEach(async(() => {
        page.slider.slideNext();
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideNoFirst(pageRef);
      atSlideNoLast(pageRef);
      atSlideMiddle(pageRef);
      atSlideNo(pageRef, 1);

      describe('After slideNext() at slide 1', () => {
        beforeEach(async(() => {
          page.slider.slideNext();
          page.fixture.detectChanges();
        }));

        atSlideEach(pageRef);
        atSlideNoFirst(pageRef);
        atSlideLast(pageRef);
        atSlideNo(pageRef, 2);

        describe('After slideNext() at slide 2', () => {
          beforeEach(async(() => {
            page.slider.slideNext();
            page.fixture.detectChanges();
          }));

          atSlideEach(pageRef);
          atSlideNoFirst(pageRef);
          atSlideLast(pageRef);
          atSlideNo(pageRef, 2);

        });
      });
    });

    describe('After slideTo(-1) - at slide 0 /out of range/', () => {

      beforeEach(async(() => {
        page.slider.slideTo(-1);
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideNoLast(pageRef);
      atSlideNo(pageRef, 0);

    });

    describe('After slideTo(3) - at slide 0 /out of range/', () => {

      beforeEach(async(() => {
        page.slider.slidePrev(3);
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideFirst(pageRef);
      atSlideNoLast(pageRef);
      atSlideNo(pageRef, 0);

    });
  });

  describe('Slider with three slides and navigation;', () => {
    let page: SliderPage<SliderWithThreeSlidesAndNavigationComponent>;
    const pageRef = {page: undefined};

    beforeEach(async(() => {
      page = createPage(SliderWithThreeSlidesAndNavigationComponent, {slidesCount: 3});
      pageRef.page = page;
    }));

    beforeEach(() => {
    });

    it('should create an instance', () => {
      expect(page.component).toBeTruthy();
    });

    it('should state.initialized = true', () => {
      expect(page.state.initialized).toBeTruthy();
    });

    it(`should have page.options.slidesCount slides (elements with maSliderItemDirective)`, () => {
      expect(page.slidesEl.length).toEqual(page.options.slidesCount);
    });

    it('should have topLayer', () => {
      expect(page.topLayerEl).toBeTruthy();
    });

    it(`topLayer should have ${maSliderCssClassTopLayer}`, () => {
      expect(page.topLayerEl.nativeElement.classList).toContain(maSliderCssClassTopLayer);
    });

    it('should have navPrev', () => {
      expect(page.navPrevEl).toBeTruthy();
    });

    it('should have navNext', () => {
      expect(page.navNextEl).toBeTruthy();
    });

    it(`navPrev should have NOT css class ${maSliderCssClassNavPrevActive}`, () => {
      expect(page.navPrevEl.nativeElement.classList).not.toContain(maSliderCssClassNavPrevActive);
    });

    it(`navNext should have css class ${maSliderCssClassNavNextActive}`, () => {
      page.fixture.detectChanges();
      expect(page.navNextEl.nativeElement.classList).toContain(maSliderCssClassNavNextActive);
    });

    atSlideNo(pageRef, 0);

    describe('After click navNext at slide 0;', () => {

      beforeEach(async(() => {
        click(page.navNextEl);
        page.fixture.detectChanges();
      }));

      atSlideNo(pageRef, 1);

      it(`navPrev should have css class ${maSliderCssClassNavPrevActive}`, () => {
        expect(page.navPrevEl.nativeElement.classList).toContain(maSliderCssClassNavPrevActive);
      });

      it(`navNext should have css class ${maSliderCssClassNavNextActive}`, () => {
        expect(page.navNextEl.nativeElement.classList).toContain(maSliderCssClassNavNextActive);
      });

      describe('After click navPrev at slide 1;', () => {

        beforeEach(async(() => {
          click(page.navPrevEl);
          page.fixture.detectChanges();
        }));

        atSlideNo(pageRef, 0);

        it(`navPrev should have NOT css class ${maSliderCssClassNavPrevActive}`, () => {
          expect(page.navPrevEl.nativeElement.classList).not.toContain(maSliderCssClassNavPrevActive);
        });

        it(`navNext should have css class ${maSliderCssClassNavNextActive}`, () => {
          expect(page.navNextEl.nativeElement.classList).toContain(maSliderCssClassNavNextActive);
        });

      });

      describe('After click navNext at slide 1;', () => {

        beforeEach(async(() => {
          click(page.navNextEl);
          page.fixture.detectChanges();
        }));

        atSlideNo(pageRef, 2);

        it(`navPrev should have css class ${maSliderCssClassNavPrevActive}`, () => {
          expect(page.navPrevEl.nativeElement.classList).toContain(maSliderCssClassNavPrevActive);
        });

        it(`navNext should have css class ${maSliderCssClassNavNextActive}`, () => {
          expect(page.navNextEl.nativeElement.classList).not.toContain(maSliderCssClassNavNextActive);
        });

      });

    });

  });

  describe('Slider with three slides and pagination;', () => {
    let page: SliderPage<SliderWithThreeSlidesAndPaginationComponent>;
    const pageRef = {page: undefined};

    beforeEach(async(() => {
      page = createPage(SliderWithThreeSlidesAndPaginationComponent, {slidesCount: 3});
      pageRef.page = page;
      page.fixture.detectChanges();
    }));

    beforeEach(() => {
    });

    it('should create an instance', () => {
      expect(page.component).toBeTruthy();
    });

    it('should state.initialized = true', () => {
      expect(page.state.initialized).toBeTruthy();
    });

    it(`should have page.options.slidesCount slides (elements with maSliderItemDirective)`, () => {
      expect(page.slidesEl.length).toEqual(page.options.slidesCount);
    });

    it('should NOT have topLayer', () => {
      expect(page.topLayerEl === null).toBeTruthy();
    });

    it('should NOT have navPrev', () => {
      expect(page.navPrevEl === null).toBeTruthy();
    });

    it('should NOT have navNext', () => {
      expect(page.navNextEl === null).toBeTruthy();
    });

    it('should have three navTo el', () => {
      expect(page.navToElList.length === 3);
    });

    describe('After click navTo 1 at slide 0;', () => {

      beforeEach(async(() => {
        click(page.navToElList[1]);
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideNoFirst(pageRef);
      atSlideNoLast(pageRef);
      atSlideNo(pageRef, 1);


    });

    describe('After click navTo 2 at slide 0;', () => {

      beforeEach(async(() => {
        click(page.navToElList[2]);
        page.fixture.detectChanges();
      }));

      atSlideEach(pageRef);
      atSlideNoFirst(pageRef);
      atSlideLast(pageRef);
      atSlideNo(pageRef, 2);

    });

  });

});


class TestSliderBase {
  items: any[] = [
    {value: 'item1'},
    {value: 'item2'},
    {value: 'item3'}
  ];
}

@Component({
  template: `<ma-slider><div maSliderItem></div></ma-slider>`,
})
export class SliderWithOneSlideComponent extends TestSliderBase {
}

@Component({
  template: `
  <ma-slider #slider>
    <div maSliderItem *ngFor="let item of items">{{item.value}}</div>
  </ma-slider>`,
})
export class SliderWithThreeSlidesComponent extends TestSliderBase {
}

@Component({
  template: `
  <ma-slider #slider>
    <div maSliderItem *ngFor="let item of items">{{item.value}}</div>
    <div maSliderTopLayer>
      <div [maSliderNavPrev]="slider" class="my-class-slider-prev">&lt;</div>
      <div [maSliderNavNext]="slider" class="my-class-slider-next">&lt;</div>
    </div>
  </ma-slider>`,
})
export class SliderWithThreeSlidesAndNavigationComponent extends TestSliderBase {
}

@Component({
  template: `
  <ma-slider #slider>
    <div maSliderItem *ngFor="let item of items">{{item.value}}</div>
  </ma-slider>
  <ul>
    <li [maSliderNavTo]="slider" maIndex="0">1</li>
    <li [maSliderNavTo]="slider" maIndex="1">2</li>
    <li [maSliderNavTo]="slider" maIndex="2">3</li>
  </ul>
  `,

})
export class SliderWithThreeSlidesAndPaginationComponent extends TestSliderBase {
}


function atSlideFirst<T>(ref: {page: SliderPage<T>}) {

  it('should state.isBeginning = true', () => {
    expect(ref.page.state.isBeginning).toBeTruthy();
  });
}

function atSlideNoFirst<T>(ref: {page: SliderPage<T>}) {

  it('should state.isBeginning = false', () => {
    expect(ref.page.state.isBeginning).toBeFalsy();
  });
}

function atSlideMiddle<T>(ref: {page: SliderPage<T>}) {

}

function atSlideLast<T>(ref: {page: SliderPage<T>}) {

  it('should state.isEnd = true', () => {
    expect(ref.page.state.isEnd).toBeTruthy();
  });
}

function atSlideNoLast<T>(ref: {page: SliderPage<T>}) {

  it('should state.isEnd = false', () => {
    expect(ref.page.state.isEnd).toBeFalsy();
  });
}


function atSlideNo<T>(ref: {page: SliderPage<T>}, index: number) {
  it(`should state.currentSlide = ${index}`, () => {
    expect(ref.page.state.currentSlide).toEqual(index);
  });

  it(`slide ${index} should have css class '${maSliderCssClassItemActive}'`, () => {
    ref.page.fixture.detectChanges();
    expect(ref.page.slidesEl[index].nativeElement.classList).toContain(maSliderCssClassItemActive);
  });
}

function atSlideEach<T>(ref: {page: SliderPage<T>}) {

  it(`should state.slides = page.options.slidesCount`, () => {
    expect(ref.page.state.slides).toEqual(ref.page.options.slidesCount);
  });

  it(`each slide should have css class '${maSliderCssClassItem}'`, () => {
    ref.page.slidesEl.forEach(slide => expect(slide.nativeElement.classList).toContain(maSliderCssClassItem));
  });
}


