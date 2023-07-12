import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Offer } from "../models/offer.model";

const OfferSchema = new Schema<Offer>(
  {
    productList: [{ type: String , required: false, default:"" }],
    discountPercent: { type: Number, required: true, default:0 },
    startDate: { type: String, required: true, default: "" },
    endDate: { type: String, required: true, default: "" },
  },
  {
    collection: env.OFFER_MANAGEMENT,
  }
);

const OfferDB = model<Offer>("offer", OfferSchema);

export { OfferDB };