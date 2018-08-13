import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaProductListPaginationComponent } from './product-list-pagination.component';

describe('ProductListPaginationComponent', () => {
  let component: MaProductListPaginationComponent;
  let fixture: ComponentFixture<MaProductListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaProductListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaProductListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
