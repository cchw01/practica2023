import { TestBed } from '@angular/core/testing';

import { IngredientsAdminService } from './ingredients-admin.service';

describe('IngredientsAdminService', () => {
  let service: IngredientsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
