import { TestBed } from '@angular/core/testing';

import { ModalDeleteProductsService } from './modal-delete-products.service';

describe('ModalDeleteProductsService', () => {
  let service: ModalDeleteProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDeleteProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
