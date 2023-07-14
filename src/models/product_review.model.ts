import { ObjectId } from "mongoose";

export class Product_review {
  id!: ObjectId;
  Product!: ObjectId;
  reviewDate: Date;
  User!: ObjectId;
  Message!: string;
  starRating!: number;

  public constructor(init?: Partial<Product_review>) {
    Object.assign(this, init);
  }
}
