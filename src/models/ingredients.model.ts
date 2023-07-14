import { ObjectId } from 'mongoose';

export class Ingredients {
  id!: ObjectId;
  name!: string;
  stoc!: number;
  isAlergen!: boolean;

  public constructor(init?: Partial<Ingredients>) {
    Object.assign(this, init);
  }
}
