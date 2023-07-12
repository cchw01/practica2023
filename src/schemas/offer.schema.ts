import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Offer } from "../models/offer.model";

const OfferSchema = new Schema<Offer>(
  {
    name: { type: String, required: true, default: "" },
    productList: [{ type: String , required: false, default:"" }],
  },
  {
    collection: env.CATEGORY_MANAGEMENT,
  }
);

const OfferDB = model<Offer>("offer", OfferSchema);

export { OfferDB };