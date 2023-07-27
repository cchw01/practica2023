import {Ingredients} from '../../../../../../practica2023/RestaurantBackend/src/models/ingredients.model'
export class Product {
    _id!: string;
    name!: string;
    photo!: string;
    price!: number;
    ingredientsList!: Array<Ingredients>[];
    isAvailable!: boolean;
    public constructor(init?: Partial<Product>) {
      Object.assign(this, init);
    }
  }