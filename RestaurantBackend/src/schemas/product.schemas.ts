import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Product } from "../models/product.model";

const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    photo: { type: Schema.Types.ObjectId, ref: 'Photo'},
    price: {type: Number, required:true},
    ingredientsList:[{ type: Schema.Types.ObjectId, ref: 'Ingredients'}],
    isAvailable: { type: Boolean, required: true },
  },
  {
    collection: env.PRODUCT_DB,
  }
);

const ProductDB = model<Product>("product", ProductSchema);

export { ProductDB };