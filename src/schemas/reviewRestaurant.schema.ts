import mongoose from 'mongoose';
const { model, Schema } = mongoose;

import { env } from '../env';
import { reviewRestaurant } from '../models/reviewRestaurant.model';

const reviewRestaurantSchema = new Schema<reviewRestaurant>(
  {
    user: { type: String, required: true, default: '' },
    reviewDate: { type: String, required: false, default: '11/07/2023' },
    ratingStars: { type: Number, required: false, default: 5 },
    message: { type: String, required: false, default: '' },
  },
  {
    collection: env.ReviewRestaurant_MANAGEMENT,
  }
);

const reviewRestaurantDB = model<reviewRestaurant>(
  'reviewRestaurant',
  reviewRestaurantSchema
);

export { reviewRestaurantDB };
