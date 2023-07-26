import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfferPageComponent } from './admin-offer-page.component';

describe('AdminOfferPageComponent', () => {
  let component: AdminOfferPageComponent;
  let fixture: ComponentFixture<AdminOfferPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOfferPageComponent]
    });
    fixture = TestBed.createComponent(AdminOfferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
