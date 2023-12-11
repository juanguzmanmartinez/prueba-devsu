import { TestBed } from '@angular/core/testing';

import { ProductsAddFormService } from './products-add-form.service';

describe('ProductsAddFormService', () => {
  let service: ProductsAddFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAddFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
