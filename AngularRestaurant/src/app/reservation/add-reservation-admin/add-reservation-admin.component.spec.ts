import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservationAdminComponent } from './add-reservation-admin.component';

describe('AddReservationAdminComponent', () => {
  let component: AddReservationAdminComponent;
  let fixture: ComponentFixture<AddReservationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReservationAdminComponent]
    });
    fixture = TestBed.createComponent(AddReservationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
