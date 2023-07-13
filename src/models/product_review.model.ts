import { ObjectId } from "mongoose";

export class Product_review {
  id!: ObjectId;
  Product!: string;
  reviewDate!: string;
  User!: string;
  Message!: string;
  starRating!: string;

  public constructor(init?: Partial<Product_review>) {
    Object.assign(this, init);
  }
}
