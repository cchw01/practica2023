import { ObjectId } from "mongoose";

export class Category {
	_id!: ObjectId;
	name: string;
	productList!: ObjectId[];

	constructor(category?: Partial<Category>) {
		Object.assign(this, category);
	}
}