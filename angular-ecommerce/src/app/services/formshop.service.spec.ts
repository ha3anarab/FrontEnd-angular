import { TestBed } from '@angular/core/testing';

import { FormshopService } from './formshop.service';

describe('FormShopService', () => {
  let service: FormshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
