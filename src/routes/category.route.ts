import { Router, Request, Response, NextFunction } from 'express';
import { Category } from '../models/category.model';
import * as categoryService from '../services/category.service';

//create inventory item
const inventoryCategoryRouter = Router();

inventoryCategoryRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let randomVariable: Error | Category;
    console.log(body);

    try {
      randomVariable = await categoryService.postCategory(body);
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//get inventory item
inventoryCategoryRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    let randomVariable: Error | Category | null;
    try {
      randomVariable = await categoryService.getCategoryById(req.params.id);
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//get all inventory items
inventoryCategoryRouter.get(
  '/',
  async (_req: Request, res: Response, next: NextFunction) => {
    let randomVariable: Error | Category[] | null;
    try {
      randomVariable = await categoryService.getAllCategories();
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//update inventory item
inventoryCategoryRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let randomVariable: Error | Category | string | null;
    try {
      randomVariable = await categoryService.updateCategory(
        req.params.id,
        body
      );
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//delete inventory item
inventoryCategoryRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    let randomVariable: Error | string | null;
    try {
      randomVariable = await categoryService.deleteCategory(req.params.id);
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

export { inventoryCategoryRouter };
