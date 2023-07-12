import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Offer } from "../models/offer.model";

const OfferSchema = new Schema<Offer>(
  {
    productList: [{ type: String , required: false, default:"" }],
    discountPercent: { type: Number, required: true, default:0 },
    startDate: { type: Date, required: true, default: null },
    endDate: { type: Date, required: true, default: null },
  },
  {
    collection: env.OFFER_MANAGEMENT,
  }
);

const OfferDB = model<Offer>("offer", OfferSchema);

export { OfferDB };