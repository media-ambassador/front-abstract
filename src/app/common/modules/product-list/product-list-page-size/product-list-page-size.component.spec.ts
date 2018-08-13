import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaProductListPageSizeComponent } from './product-list-page-size.component';

describe('ProductListPageSizeComponent', () => {
  let component: MaProductListPageSizeComponent;
  let fixture: ComponentFixture<MaProductListPageSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaProductListPageSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaProductListPageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
