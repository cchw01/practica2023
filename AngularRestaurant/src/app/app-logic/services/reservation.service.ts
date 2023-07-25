import { Injectable } from '@angular/core';
import { Reservations } from './reservations';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  addReservation(reservation: Reservations): void {
    this.http
      .post<any>('http://localhost:80/rezervation', reservation)
      .subscribe((data) => {});
  }
}
