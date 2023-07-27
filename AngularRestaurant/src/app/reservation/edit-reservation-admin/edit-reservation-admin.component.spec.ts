import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReservationAdminComponent } from './edit-reservation-admin.component';

describe('EditReservationAdminComponent', () => {
  let component: EditReservationAdminComponent;
  let fixture: ComponentFixture<EditReservationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditReservationAdminComponent]
    });
    fixture = TestBed.createComponent(EditReservationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
