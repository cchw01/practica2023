import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantReviewSingleComponent } from './restaurant-review-single.component';

describe('RestaurantReviewSingleComponent', () => {
  let component: RestaurantReviewSingleComponent;
  let fixture: ComponentFixture<RestaurantReviewSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantReviewSingleComponent]
    });
    fixture = TestBed.createComponent(RestaurantReviewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
