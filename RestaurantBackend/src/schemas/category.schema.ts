import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Category } from "../models/category.model";

const CategorySchema = new Schema<Category>(
  {
    name: { type: String, required: true, default: "" },
    productList: [{ type: Schema.Types.ObjectId, required: false, default: "" },],
  },
  {
    collection: env.CATEGORY_DB,
  }
);

const CategoryDB = model<Category>("category", CategorySchema);

export { CategoryDB };
