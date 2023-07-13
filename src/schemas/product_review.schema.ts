import mongoose from "mongoose";
const { model, Schema } = mongoose;

//import { env } from "../env";
import { Product_review } from "../models/product_review.model";

const Product_reviewSchema = new Schema<Product_review>(
  {
    Product: { type: String, required: true, default: "" },
    reviewDate: { type: String, required: true, default: "" },
    User: { type: String, required: true, default: "" },
    Message: { type: String, required: true, default: "" },
    starRating: { type: String, required: true, default: "" },
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
