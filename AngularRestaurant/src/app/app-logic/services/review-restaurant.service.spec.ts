import { TestBed } from '@angular/core/testing';

import { ReviewRestaurantService } from './review-restaurant.service';

describe('ReviewRestaurantService', () => {
  let service: ReviewRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
