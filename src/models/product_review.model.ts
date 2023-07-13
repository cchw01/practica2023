import { ObjectId } from "mongoose";

export class Product_review {
  id!: ObjectId;
  Product!: string;
  reviewDate: Date;
  User!: string;
  Message!: string;
  starRating!: number;

  public constructor(init?: Partial<Product_review>) {
    Object.assign(this, init);
  }
}
