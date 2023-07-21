import { Injectable } from '@angular/core';
import { Reservations } from './reservations';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  addReservation(reservation: Reservations): void {
    this.http
      .post<any>('localhost:80/rezervation', reservation, this.httpOptions)
      .subscribe((data) => {
        console.log(data.id);
      });
  }
}
