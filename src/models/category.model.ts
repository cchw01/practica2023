import { ObjectId } from "mongoose";

export class Category {
	_id!: ObjectId;
	name!: string;
	productList: string[];

	constructor(category?: Partial<Category>) {
		Object.assign(this, category);
	}
}