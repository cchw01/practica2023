import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, Validators, FormGroup, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Reservations } from '../app-logic/services/reservations';
import { ReservationService } from '../app-logic/services/reservation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  reservation!: Reservations;
  addReservationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) {
    this.route.params.subscribe((params) => {});
  }

  ngOnInit(): void {
    this.addReservationForm = this.fb.group({
      user: ['', Validators.required],
      numberOfPersons: ['', Validators.required],
      reservationStart: ['', Validators.required],
      reservationEnd: ['', Validators.required],
      userNotes: [''],
    });
  }

  OnSubmit() {
    this.reservation = new Reservations(this.addReservationForm.value);
    this.reservation.status = 1;
    const formatDate = moment(
      this.addReservationForm.value.reservationStart
    ).format('YYYY-MM-DD HH:mm:ss');
    console.log(this.reservation);
    this.reservationService.addReservation(this.reservation);
  }
}
