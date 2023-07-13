import mongoose from 'mongoose';
const { model, Schema } = mongoose;

import { env } from '../env';
import { Ingredients } from '../models/ingredients.model';

const IngredientsSchema = new Schema<Ingredients>(
  {
    name: { type: String, required: true, default: '' },
    stoc: { type: Number, required: true, default: 0 },
    isAlergen: { type: Boolean, required: true, default: false },
  },
  {
    collection: env.Ingredients_MANAGEMENT,
  }
);

const IngredientsDB = model<Ingredients>('Ingredients', IngredientsSchema);

export { IngredientsDB };
