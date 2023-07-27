import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAdminComponent } from './admin-offer-page.component';

describe('OfferAdminComponent', () => {
  let component: OfferAdminComponent;
  let fixture: ComponentFixture<OfferAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferAdminComponent]
    });
    fixture = TestBed.createComponent(OfferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
