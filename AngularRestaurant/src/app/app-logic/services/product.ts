export class Product {
    _id!: number;
    name!: string;
    photo!: string;
    price!: number;
    ingredientList!: string[];
    isAvailable!: boolean;
  
    public constructor(init?: Partial<Product>) {
      Object.assign(this, init);
    }
  }