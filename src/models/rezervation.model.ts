import { ObjectId } from 'mongoose';
export enum status{confirmata,in_asteptare,anulata}

export class rezervation {
  id!: ObjectId;
  user!: ObjectId;
  table: ObjectId;
  rezervationStrat: Date;
  rezervationEnd: Date;
  userNotes: String;
  status: status;
  numberOfPersons: Number;

  public constructor(init?: Partial<rezervation>) {
    Object.assign(this, init);
  }
}
