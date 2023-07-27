import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { User } from 'src/app/app-logic/services/user';
import { UserAdminService } from 'src/app/app-logic/services/user-admin.service';
import { ReservationService } from 'src/app/app-logic/services/reservation.service';
import { Reservations } from 'src/app/app-logic/services/reservations';
@Component({
  selector: 'app-reservation-admin',
  templateUrl: './reservation-admin.component.html',
  styleUrls: ['./reservation-admin.component.css'],
})
export class ReservationAdminComponent implements OnInit {
  ngOnInit(): void {
    this.reservationService.getData().subscribe((res: Array<Reservations>) => {
      res.map((x) => {
        this.userService
          .getUserById(x.user.toString())
          .subscribe((theUser: User) => {
            x.user = theUser.firstName + ' ' + theUser.lastName;
          });
      });
      this.reservationList = new MatTableDataSource<Reservations>(res);
      this.reservationList.paginator = this.paginator;
      this.reservationList.sort = this.sort;
    });
  }
  constructor(
    private reservationService: ReservationService,
    private userService: UserAdminService
  ) {}
  tempReser?: Array<Reservations[]>;
  @ViewChild(MatPaginator, { static: true }) paginator?:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort, { static: true }) sort?: MatSort | undefined;
  reservationList!: any;

  userAdminColumn: string[] = [
    'user',
    'table',
    'reservationStart',
    'reservationEnd',
    'userNotes',
    'status',
    'numberOfPersons',
    'actions',
  ];
  // ObjectIdToString(): string {
  //   this.userNames?.forEach((element) => {
  //     return element.firstName;
  //   });
  // }
}
