import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaMarkupComponent } from './markup.component';

describe('MaMarkupComponent', () => {
  let component: MaMarkupComponent;
  let fixture: ComponentFixture<MaMarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaMarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('MaMarkup should display data', () => {
    component.maHtmlMarkup = 'myData';
    fixture.detectChanges();
    expect(fixture.elementRef.nativeElement.innerHTML).toBe('myData');
  });

});
