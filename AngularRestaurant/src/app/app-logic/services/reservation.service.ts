import { Injectable } from '@angular/core';
import { Reservations } from './reservations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

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
  getData(): any {
    return this.http.get<any>('http://localhost:80/rezervation');
  }

  updateReservation(reservation: Reservations, id: any): void {
    const body = {
      _id: id,
      user: reservation.user,
      table: reservation.table,
      reservationStart: reservation.reservationStart,
      reservationEnd: reservation.reservationEnd,
      userNotes: reservation.userNotes,
      numberOfPersons: reservation.numberOfPersons,
    };
    this.http.put<any>('http://localhost:80/rezervation/', body).subscribe();
  }
  getReservationById(id?: string): Observable<Reservations> {
    console.log(id);
    return this.http.get<Reservations>('http://localhost:80/rezervation/' + id);
  }
  getUserByName(name?: string): any {
    return this.http.get<any>('http://localhost:80/rezervation/' + name);
  }
  deleteReservation(id?: string) {
    return this.http
      .delete<Reservations>('http://localhost:80/rezervation/' + id)
      .subscribe(() => console.log('Delete successful'));
  }
}
