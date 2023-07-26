export class Product {
    _id!: string;
    name!: string;
    photo!: string;
    price!: number;
    ingredientsList!: string[];
    isAvailable!: boolean;

    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
}
