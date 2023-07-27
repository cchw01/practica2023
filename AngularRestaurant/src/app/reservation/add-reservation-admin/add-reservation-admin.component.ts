import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/app-logic/services/reservation.service';
import { Reservations } from 'src/app/app-logic/services/reservations';

@Component({
  selector: 'app-add-reservation-admin',
  templateUrl: './add-reservation-admin.component.html',
  styleUrls: ['./add-reservation-admin.component.css'],
})
export class AddReservationAdminComponent implements OnInit {
  reservation?: Reservations;
  AddReservationForm!: FormGroup;
  ngOnInit(): void {
    this.AddReservationForm = this.fb.group({
      user: [this.reservation?.user, Validators.required],
      table: [this.reservation?.table, Validators.required],
      reservationStart: [
        this.reservation?.reservationStart,
        Validators.required,
      ],
      reservationEnd: [this.reservation?.reservationEnd],
      userNotes: [this.reservation?.userNotes],
      status: [this.reservation?.status],
      numberOfPersons: [this.reservation?.numberOfPersons],
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) {
    this.AddReservationForm = this.fb.group({
      user: [this.reservation?.user, Validators.required],
      table: [this.reservation?.table, Validators.required],
      reservationStart: [
        this.reservation?.reservationStart,
        Validators.required,
      ],
      reservationEnd: [this.reservation?.reservationEnd],
      userNotes: [this.reservation?.userNotes],
      status: [this.reservation?.status],
      numberOfPersons: [this.reservation?.numberOfPersons],
    });
  }

  OnSubmit(): void {
    this.reservation = new Reservations(this.AddReservationForm.value);
    this.reservationService.addReservation(this.reservation);
    this.redirectToMainPage();
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/reservation-admin']);
    }, 1000);
  }
}
