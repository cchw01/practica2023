import { ObjectId } from 'mongoose';

export class Product {
  _id!: ObjectId;
  name!: string;
  isAvailable!: boolean;
  price!: number;
  photo!: ObjectId;
  ingredientsList!: ObjectId[];
  public constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}