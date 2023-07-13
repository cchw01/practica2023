import { Router, Request, Response, NextFunction } from "express";
import { Product_review } from "../models/product_review.model";
import * as product_reviewServices from "../services/product_review.service";

export { setProduct_reviewRouter };

function setProduct_reviewRouter(router: Router): Router {
  router.get("/:id", getProduct_review);
  router.get("/", getProduct_reviews);
  router.post("/", postProduct_review);
  //   router.delete("/:id", deleteProduct_reviews);
  //   router.put("/", updateProduct_review);
  return router;
}

async function getProduct_review(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const product_reviewId: string = req.params.id;

  let product_review: Product_review | null | Error = null;

  try {
    product_review = await product_reviewServices.getProduct_review(
      product_reviewId
    );
  } catch (ex: any) {
    return next(ex);
  }

  if (product_review instanceof Error) {
    return next(product_review);
  }

  if (product_review === null) {
    return res.status(404).json({ message: "Review not found" });
  }

  console.log("getProduct_review(), ", product_review);
  return res.json(product_review);
}

async function postProduct_review(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body: any = req.body;
  let product_review: Error | Product_review;

  try {
    product_review = await product_reviewServices.saveProduct_review(body);
  } catch (ex) {
    return next(ex);
  }

  if (product_review instanceof Error) {
    return next(product_review);
  }
  console.log("postProduct_review(),", product_review);
  return res.status(201).json(product_review);
}

async function getProduct_reviews(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  let product_reviews: Product_review[] | Error = [];

  try {
    product_reviews = await product_reviewServices.getProduct_reviews();
  } catch (ex: any) {
    return next(ex);
  }

  if (product_reviews instanceof Error) {
    return next(product_reviews);
  }

  console.log("getProduct_reviews(), product_reviews ", product_reviews);
  return res.json(product_reviews);
}
