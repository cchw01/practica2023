import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Order, deliveryType, orderStatus } from "../models/order.model";




const OrderSchema = new Schema<Order>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    address: { type: String, required: true },
    productList: { type: String, required: true },
    deliveryType: { type: String, enum: Object.values(deliveryType), required: true },
    totalPrice: { type: String, required: true },
    userNotes: { type: String, required: true },
    date: { type: Date, required: true },
    orderStatus: { type: String,enum: Object.values(orderStatus), required: true },

  },
  {
    collection: env.ORDER_DB,
  }
);

const OrderDB = model<Order>("order", OrderSchema);

export { OrderDB };
