import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, Validators, FormGroup, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Reservations } from '../app-logic/services/reservations';
import { ReservationService } from '../app-logic/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  reservation!: Reservations;
  addReservationForm!: FormGroup;
  collect_date = '';
  temporaryFirstPartOfDate?: string;
  transformHour?: string;
  numberHour?: number;
  temporarySecondPartOfDate?: string;

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
      reservationEnd: [''],
      userNotes: [''],
    });
  }

  OnSubmit() {
    this.reservation = new Reservations(this.addReservationForm.value);
    this.reservation.status = 1;
    console.log(this.reservation);
    this.reservationService.addReservation(this.reservation);
    console.log(this.collect_date);
  }
  //We take the start-date and we put in the end-date 2h later automatically
  takeDate(value: string) {
    //Slice part
    this.temporaryFirstPartOfDate = value.slice(0, 11);
    this.transformHour = value.slice(11, 13);
    this.numberHour = Number(this.transformHour) + 2;
    this.temporarySecondPartOfDate = value.slice(13);
    //We concatenate and add one 0 in front of the number if the condition is true
    this.collect_date = this.temporaryFirstPartOfDate.concat(
      this.numberHour < 10
        ? '0' + this.numberHour.toString()
        : this.numberHour.toString(),
      this.temporarySecondPartOfDate
    );
    console.log(this.collect_date);
  }
}
