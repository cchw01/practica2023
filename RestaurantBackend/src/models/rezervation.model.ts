import { ObjectId } from 'mongoose';

export class rezervation {
  id!: ObjectId;
  user!: ObjectId;
  table: ObjectId;
  reservationStart: Date;
  reservationEnd: Date;
  userNotes: String;
  status: string;
  numberOfPersons: Number;

  public constructor(init?: Partial<rezervation>) {
    Object.assign(this, init);
  }
}
