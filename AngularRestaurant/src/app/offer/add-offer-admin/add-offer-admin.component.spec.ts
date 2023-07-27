import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferAdminComponent } from './add-offer-admin.component';

describe('AddOfferAdminComponent', () => {
  let component: AddOfferAdminComponent;
  let fixture: ComponentFixture<AddOfferAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOfferAdminComponent]
    });
    fixture = TestBed.createComponent(AddOfferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
