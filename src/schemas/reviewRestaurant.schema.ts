import mongoose from 'mongoose';
const { model, Schema } = mongoose;

import { env } from '../env';
import { reviewRestaurant } from '../models/reviewRestaurant.model';
import { User } from '../models/user.model';

const reviewRestaurantSchema = new Schema<reviewRestaurant>(
  {
    user: { type: User, required: true },
    reviewDate: { type: Date, required: false, default: Date.now() },
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
