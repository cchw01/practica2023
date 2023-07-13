import mongoose from 'mongoose';
const { model, Schema } = mongoose;

import { env } from '../env';
import { reviewRestaurant } from '../models/reviewRestaurant.model';

const reviewRestaurantSchema = new Schema<reviewRestaurant>(
  {
    reviewDate: { type: Date, required: false, default: Date.now() },
    ratingStars: { type: Number, required: false, default: 5 },
    message: { type: String, required: false, default: '' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    collection: env.reviewRestaurantDB,
  }
);

const reviewRestaurantDB = model<reviewRestaurant>(
  'reviewRestaurant',
  reviewRestaurantSchema
);

export { reviewRestaurantDB };
