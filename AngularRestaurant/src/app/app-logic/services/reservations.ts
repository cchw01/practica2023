export class Reservations {
  id!: string;
  user!: string;
  table!: string;
  reservationStart!: Date;
  reservationEnd?: Date;
  userNotes?: string;
  status?: number;
  numberOfPersons!: number;

  constructor(reservation?: Partial<Reservations>) {
    Object.assign(this, reservation);
  }
}
