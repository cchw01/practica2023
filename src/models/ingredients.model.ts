export class Ingredients {
  id!: number;
  name: string;
  stoc: number;
  isAleregen: boolean;

  private static lastId: number = 0;
  private static ingredientsList: Ingredients[] = [];

  constructor(model?: Partial<Ingredients>) {
    if (!model || !(model instanceof Object)) {
      model = <Ingredients>{};
    }
    this.id = model.id || Ingredients.getNextId();
    this.name = model.name || '';
    this.stoc = model.stoc || 0;
    this.isAleregen = model.isAleregen || false;
  }

  private static getNextId(): number {
    return ++Ingredients.lastId;
  }
  static createIngredient(model: Partial<Ingredients>): Ingredients {
    const newIngredient = new Ingredients(model);
    Ingredients.ingredientsList.push(newIngredient);
    return newIngredient;
  }

  static getIngredientById(id: number): Ingredients | undefined {
    return Ingredients.ingredientsList.find(
      (ingredient) => ingredient.id === id
    );
  }

  static updateIngredient(
    id: number,
    updates: Partial<Ingredients>
  ): Ingredients | undefined {
    const ingredient = Ingredients.getIngredientById(id);
    if (ingredient) {
      Object.assign(ingredient, updates);
    }
    return ingredient;
  }

  static deleteIngredient(id: number): boolean {
    const index = Ingredients.ingredientsList.findIndex(
      (ingredient) => ingredient.id === id
    );
    if (index !== -1) {
      Ingredients.ingredientsList.splice(index, 1);
      return true;
    }
    return false;
  }

  static getAllIngredients(): Ingredients[] {
    return Ingredients.ingredientsList;
  }
}
