import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReservationComponent } from './confirm-reservation.component';

describe('ConfirmReservationComponent', () => {
  let component: ConfirmReservationComponent;
  let fixture: ComponentFixture<ConfirmReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmReservationComponent],
    });
    fixture = TestBed.createComponent(ConfirmReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
