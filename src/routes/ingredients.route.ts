import { Router, Request, Response, NextFunction } from 'express';
import { Ingredients } from '../models/ingredients.model';
import { IngredientsDB } from '../schemas/ingredients.schema';
import * as IngredientsService from '../services/ingredients.service';

const IngredientsRouter = Router();

IngredientsRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let addedVariable: Error | Ingredients;
    try {
      addedVariable = await IngredientsService.postIngredients(body);
    } catch (ex) {
      return next(ex);
    }
    if (addedVariable instanceof Error) {
      return next(addedVariable);
    }

    res.send(addedVariable);
  }
);

//get ingredients
IngredientsRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const query: any = req.body;
    let ingredientsByName: Error | Ingredients | undefined;
    try {
      ingredientsByName = await IngredientsService.getIngredient(query);
      res.json(ingredientsByName);
    } catch (ex) {
      return next(ex);
    }
    if (ingredientsByName instanceof Error) {
      return next(ingredientsByName);
    }
  }
);

//get all ingredients
IngredientsRouter.get(
  '/',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const AllIngredients = await IngredientsDB.find();
      res.send(AllIngredients);
    } catch (ex) {
      return next(ex);
    }
  }
);
//update ingredients
IngredientsRouter.put(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    console.log(body);
    // Ingredient: body;
    if (body.name) {
      try {
        const findIngredients = await IngredientsDB.findByIdAndUpdate(
          { _id: req.body.id },
          {
            name: body.name,
            stoc: body.stoc,
            isAleregen: body.isAleregen,
          }
        );
        if (findIngredients == null) return next('Could not find ingredients!');
        console.log('updated');
        const ingredientsById = await IngredientsDB.findById(req.params.id);
        res.send(ingredientsById);
      } catch (ex) {
        return next(ex);
      }
    } else {
      return next('No attributes found!');
    }
  }
);

//delete ingredients
IngredientsRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await IngredientsDB.findByIdAndDelete(req.params.id);
      res.send('Deleted Ingredients');
    } catch (ex) {
      return next(ex);
    }
  }
);

export { IngredientsRouter };
