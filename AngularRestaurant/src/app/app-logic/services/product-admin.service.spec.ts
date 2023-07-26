import { TestBed } from '@angular/core/testing';

import { ProductAdminService } from './product-admin.service';

describe('ProductAdminService', () => {
  let service: ProductAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
