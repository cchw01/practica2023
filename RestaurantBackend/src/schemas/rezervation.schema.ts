import mongoose from 'mongoose';
const { model, Schema } = mongoose;

import { env } from '../env';
import { rezervation } from '../models/rezervation.model';

const rezervationSchema = new Schema<rezervation>(
  {
    reservationStart: { type: Date, required: false, default: Date.now() },
    reservationEnd: {
      type: Date,
      required: false,
      default: () => Date.now() + 2 * 60 * 60 * 1000,
    },
    numberOfPersons: { type: Number, required: false, default: 1 },
    userNotes: { type: String, required: false, default: '' },
    status: { type: String, required: false, default: 'In asteptare' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    table: { type: Schema.Types.ObjectId, ref: 'Table' },
  },
  {
    collection: env.rezervationDB,
  }
);

const rezervationDB = model<rezervation>('rezervation', rezervationSchema);

export { rezervationDB };
