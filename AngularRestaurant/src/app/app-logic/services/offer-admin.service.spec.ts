import { TestBed } from '@angular/core/testing';

import { OfferAdminService } from './offer-admin.service';

describe('OfferAdminService', () => {
  let service: OfferAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
