import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Product } from "../models/product.model";

const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    price: {type: Number, required:true},
    photo: { type: Schema.Types.ObjectId, ref: 'Photo'},
    ingredientsList:[{ type: Schema.Types.ObjectId, ref: 'Ingredients'}],
    reviewsList: [{ type: Schema.Types.ObjectId, ref: 'reviewRestaurant'}]  
  },
  {
    collection: env.PRODUCT_DB,
  }
);

const ProductDB = model<Product>("product", ProductSchema);

export { ProductDB };