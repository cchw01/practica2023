import {ObjectId} from "mongoose";


export class Ingredients {
  id!: ObjectId;
  name!: string;
  stoc: number;
  isAleregen: boolean;


  public constructor(init?: Partial<Ingredients>) {
  Object.assign(this, init);
  }
}