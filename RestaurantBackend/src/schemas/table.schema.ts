import mongoose from 'mongoose';
const { model, Schema } = mongoose;

import { env } from '../env';
import { Table } from '../models/table.model';

const TableSchema = new Schema<Table>(
  {
    numberOfPlaces: { type: Number, required: true },
    location: { type: String, required: true },
  },
  {
    collection: env.TABLE_DB,
  }
);

const TableDb = model<Table>('Table', TableSchema);

export { TableDb };
