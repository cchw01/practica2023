import { ObjectId } from "mongoose";

export class Offer {
	_id!: ObjectId;
	productList!: string[];
    discountPercent!: number;
    startDate!: string;
    endDate!: string;

	constructor(offer?: Partial<Offer>) {
		Object.assign(this, offer);
	}
}