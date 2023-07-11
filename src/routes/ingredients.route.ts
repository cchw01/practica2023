import { Router, Request, Response, NextFunction } from "express";
import { Ingredients } from "../models/ingredients.model";
import { CallTracker } from "assert";

const IngredientsRouter = Router();

IngredientsRouter.post("/",async (req:Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let addedVariable: Error | Ingredients;
    try {
        addedVariable = await categoryService.postCategory(body);
      } catch (ex) {
        return next(ex);
      }
      if (addedVariable instanceof Error) {
        return next(addedVariable);
      }
    
      res.send(addedVariable);
    });
    
    //get inventory item
    IngredientsRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
      try {
        const categoryById = await CategoryDB.findById(req.params.id);
        res.send(categoryById);
      } catch (ex) {
        return next(ex);
      }
    });
    
    //get all inventory items
    IngredientsRouter.get("/", async (_req: Request, res: Response, next: NextFunction) => {
      try {
        const AllIngredients = await CategoryDB.find();
        res.send(AllIngredients);
      } catch (ex) {
        return next(ex);
      }
    });
    //update inventory item
    IngredientsRouter.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
       Ingredient: body;
        if(body.name || body.parentCategory)
        { try { 
            const findCategory = await CategoryDB.findByIdAndUpdate(
              {_id: req.params.id},
              {
                name: body.name,
                parentCategory:body.parentCategory
              }
            );
            if(findCategory == null)
                return next('Could not find category!');
            console.log('updated');
            const categoryById = await CategoryDB.findById(req.params.id);
            res.send(categoryById);
      } catch (ex) {
        return next(ex);
      }
    }else{
        return next('No attributes found!');
    }
    });
    
    //delete inventory item
    IngredientsRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
      try {
        await CategoryDB.findByIdAndDelete(req.params.id);
        res.send('Deleted Category');
      } catch (ex) {
        return next(ex);
      }
    });
    
    export { IngredientsRouter };