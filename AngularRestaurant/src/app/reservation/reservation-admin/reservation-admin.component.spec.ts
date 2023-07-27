import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAdminComponent } from './reservation-admin.component';

describe('ReservationAdminComponent', () => {
  let component: ReservationAdminComponent;
  let fixture: ComponentFixture<ReservationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationAdminComponent]
    });
    fixture = TestBed.createComponent(ReservationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
