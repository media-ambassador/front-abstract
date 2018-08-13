import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaProductListFiltersComponent } from './product-list-filters.component';

describe('ProductListFiltersComponent', () => {
  let component: MaProductListFiltersComponent;
  let fixture: ComponentFixture<MaProductListFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaProductListFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaProductListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
