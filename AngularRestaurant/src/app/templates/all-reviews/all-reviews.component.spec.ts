import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReviewsComponent } from './all-reviews.component';

describe('AllReviewsComponent', () => {
  let component: AllReviewsComponent;
  let fixture: ComponentFixture<AllReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllReviewsComponent]
    });
    fixture = TestBed.createComponent(AllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
