export class Category {
    _id!: string;
	name!: string;
	productList!: string[];

    public constructor(init?: Partial<Category>) {
        Object.assign(this, init);
    }
}
