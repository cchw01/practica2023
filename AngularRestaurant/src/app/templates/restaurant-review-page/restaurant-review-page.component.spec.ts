import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantReviewPageComponent } from './restaurant-review-page.component';

describe('RestaurantReviewPageComponent', () => {
  let component: RestaurantReviewPageComponent;
  let fixture: ComponentFixture<RestaurantReviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantReviewPageComponent]
    });
    fixture = TestBed.createComponent(RestaurantReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
