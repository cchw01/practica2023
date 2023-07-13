import { Ingredients } from '../models/ingredients.model';
import { IngredientsDB } from '../schemas/ingredients.schema';

export async function postIngredients(
  Ingredients: Ingredients
): Promise<Error | Ingredients> {
  if (!Ingredients || !Ingredients.name) {
    return Error('The parameters given are not valid!');
  }
  try {
    const exists = await IngredientsDB.findOne({ name: Ingredients.name });
    if (exists) {
      return Error('The item added to the database already exists!');
    }
  } catch (ex: any) {
    return ex;
  }
  const NewIngredients = new IngredientsDB({
    name: Ingredients.name,
    stoc: Ingredients.stoc,
    isAlergen: Ingredients.isAlergen,
  });
  NewIngredients.save();
  return NewIngredients;
}

export async function getIngredient(
  Ingredients: Ingredients
): Promise<Error | Ingredients | undefined> {
  if (!Ingredients || !Ingredients.name) {
    return Error('The parameters given are not valid!');
  }
  try {
    const exists = await IngredientsDB.findOne({ name: Ingredients.name });
    if (exists) {
      return exists;
    }
  } catch (ex: any) {
    return ex;
  }
  return undefined;
}
