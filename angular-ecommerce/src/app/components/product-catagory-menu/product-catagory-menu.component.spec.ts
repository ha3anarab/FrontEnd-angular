import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatagoryMenuComponent } from './product-catagory-menu.component';

describe('ProductCatagoryMenuComponent', () => {
  let component: ProductCatagoryMenuComponent;
  let fixture: ComponentFixture<ProductCatagoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCatagoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatagoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
