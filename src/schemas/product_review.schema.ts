import mongoose from "mongoose";
const { model, Schema } = mongoose;

//import { env } from "../env";
import { Product_review } from "../models/product_review.model";

const Product_reviewSchema = new Schema<Product_review>(
  {
    Product: { type: String, required: true, default: "" },
    reviewDate: { type: Date, required: true, default: Date.now() },
    User: { type: String, required: true, default: "" },
    Message: { type: String, required: true, default: "" },
    starRating: { type: Number, required: true, default: 5 },
  },
  {
    collection: "Product_reviewDB",
  }
);

const Product_reviewDB = model<Product_review>(
  "product_review",
  Product_reviewSchema
);

export { Product_reviewDB };
