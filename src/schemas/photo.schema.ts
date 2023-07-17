import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Photo } from "../models/photo.model";

const photoSchema = new Schema<Photo>(
  {
    photoLink: { type: String, required: true, default: "" },
    description: { type: String, default: "" },
  },
  {
    collection: env.PHOTO_DB,
  }
);

const PhotoDb = model<Photo>("Photo", photoSchema);

export { PhotoDb };
