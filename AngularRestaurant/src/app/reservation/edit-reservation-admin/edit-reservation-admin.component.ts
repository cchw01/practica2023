import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ReservationService } from 'src/app/app-logic/services/reservation.service';
import { Reservations } from 'src/app/app-logic/services/reservations';
import { User } from 'src/app/app-logic/services/user';
import { UserAdminService } from 'src/app/app-logic/services/user-admin.service';

@Component({
  selector: 'app-edit-reservation-admin',
  templateUrl: './edit-reservation-admin.component.html',
  styleUrls: ['./edit-reservation-admin.component.css'],
})
export class EditReservationAdminComponent {
  addReservationForm!: FormGroup;
  reservation!: Reservations;
  identifier?: string;
  idforUser?: string;
  user?: User;
  userId?: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private userService: UserAdminService
  ) {
    this.route.params.subscribe((params) => {
      this.identifier = params['id'] ?? 0;
      console.log(params['id']);
    });
    this.addReservationForm = this.fb.group({
      user: [
        { value: this.user?.firstName, disabled: true },
        Validators.required,
      ],
      table: [this.reservation?.table],
      reservationStart: [this.reservation?.reservationStart],
      reservationEnd: [this.reservation?.reservationEnd],
      userNotes: [this.reservation?.userNotes],
      status: [this.reservation?.status],
      numberOfPersons: [this.reservation?.numberOfPersons],
    });
  }
  async getReservation(): Promise<Reservations | null> {
    return await firstValueFrom(
      this.reservationService.getReservationById(this.identifier)
    );
  }
  ngOnInit(): void {
    this.getReservation().then((x) => {
      if (x) this.reservation = new Reservations(x);

      this.userService.getUserById(this.reservation?.user).subscribe((x) => {
        this.user = x;
        this.idforUser = x._id;
        this.addReservationForm = this.fb.group({
          user: [this.user.firstName + ' ' + this.user.lastName],
          table: [this.reservation?.table],
          reservationStart: [this.reservation?.reservationStart],
          reservationEnd: [this.reservation?.reservationEnd],
          userNotes: [this.reservation?.userNotes],
          status: [this.reservation?.status],
          numberOfPersons: [this.reservation?.numberOfPersons],
        });
      });
    });
  }

  OnSubmit() {
    this.reservation = new Reservations(this.addReservationForm.value);
    if (this.idforUser) {
      this.reservation.user = this.idforUser;
    }

    this.reservationService.updateReservation(
      this.reservation,
      this.identifier
    );
    console.log(this.identifier);
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/reservation-admin']);
    }, 1000);
  }
  deleteUser() {
    this.reservationService.deleteReservation(this.identifier);
    this.router.navigate(['/reservation-admin']);
  }
}
