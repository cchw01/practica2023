
import { ObjectId } from 'mongoose';

export class Product {
  _id!: ObjectId;
  name!: string;
  photo!: ObjectId;
  price!: number;
  ingredientsList!: ObjectId[];
  isAvailable!: boolean;
  public constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}
