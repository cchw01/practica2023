import { ObjectId } from "mongoose";

export class Offer {
	_id!: ObjectId;
	productList!: string[];
    discountPercent!: number;
    startDate!: Date;
    endDate!: Date;

	constructor(offer?: Partial<Offer>) {
		Object.assign(this, offer);
	}
}