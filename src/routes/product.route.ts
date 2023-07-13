import { Router, Request, Response, NextFunction } from "express";
import { Product } from "../models/product.model";
import * as productService from "../services/product.service";

export { setProductRouter };

//create(product)
function setProductRouter(router: Router): Router {
  router.post("/product", postProduct);
  router.get("/:productId", getProduct);
  router.get("/",getProducts);
  router.delete("/:productId", deleteProduct);
  router.put("/", updateProduct);
  return router;
}

async function postProduct(req: Request, res: Response, next: NextFunction) {
  const body = req.body;
  let randomVariable: Error | Product;
  try {
    randomVariable = await productService.postProduct(body);
    res.json(randomVariable);
    console.log("b");
  } catch (ex) {
    return next(ex);
  }
  if (randomVariable instanceof Error) {
    return next(randomVariable);
  }

}

async function getProduct(req: Request, res: Response, next: NextFunction) {
  const productId: string = req.params.productId;
  let product: Error | Product | null;

  try {
    product = await productService.getProduct(productId);
  } catch (ex) {
    return next(ex);
  }
  if (product instanceof Error) {
    return next(product);
  }

  if (product === null) {
    return res.status(404).end();
  }

  return res.json(product);
}

async function getProducts(_req: Request, res: Response, next: NextFunction) {
  
  let products: Product[] | Error = [];
  
  try {
      products = await productService.getProducts();
  } catch (ex: any) {
      return next(ex);
  }
  
  if (products instanceof Error) {
      return next(products);
  }
  
  console.log("getPhotos(), photos ", products);
  return res.json(products);

}

async function deleteProduct(req: Request, res: Response, next: NextFunction) {
  const productId: string = req.params.productId;
  let product: Error | Product | null;

  try {
 product = await productService.deleteProduct(productId);
  } catch (ex) {
    return next(ex);
  }
  if (product instanceof Error) {
    return next(product);
  }

  if (product === null) {
    return res.status(404).end();
  }

  return res.json(product);
}

async function updateProduct(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;

  let product: Error | Product | undefined;
  try {
 product = await productService.updateProduct(body);
  } catch (ex) {
    return next(ex);
  }

  if (product instanceof Error) {
    return res.status(404).json("Cannot find item to update!");
  }

  return res.status(200).json("Item successfully updated!");
}