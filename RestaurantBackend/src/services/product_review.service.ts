import { Product_reviewDB } from "../schemas/product_review.schema";
import { Product_review } from "../models/product_review.model";
//import p from "proxyquire";

export {
  getProduct_review,
  saveProduct_review,
  getProduct_reviews,
  deleteProduct_review,
  updateProduct_review,
};

async function getProduct_review(
  _id: string
): Promise<Error | Product_review | null> {
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const photo = await Product_reviewDB.findOne<Product_review>({ _id: _id });
    return photo;
  } catch (ex: any) {
    return Error(ex.message);
  }
}

async function saveProduct_review(
  product_review: Product_review
): Promise<Error | Product_review> {
  if (!product_review || !(product_review instanceof Object)) {
    throw new Error("Review is required");
  }

  if (!product_review.Product || typeof product_review.Product !== "string") {
    throw new Error("Invalid product");
  }

  if (!product_review.Message || typeof product_review.Message !== "string") {
    throw new Error("Invalid message");
  }

  if (
    !product_review.starRating ||
    typeof product_review.starRating !== "number"
  ) {
    throw new Error("Invalid star rating");
  }

  const product_reviewModel = new Product_reviewDB({
    Product: product_review.Product,
    User: product_review.User,
    Message: product_review.Message,
    starRating: product_review.starRating,
  });
  console.log("mere");
  product_reviewModel.save();
  return product_reviewModel;
}

async function getProduct_reviews(): Promise<Error | Product_review[]> {
  try {
    const product_reviews = await Product_reviewDB.find<Product_review>({});
    return product_reviews;
  } catch (ex: any) {
    return Error(ex.message);
  }
}

async function deleteProduct_review(
  _id: string
): Promise<Error | Product_review | null> {
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const photo = await Product_reviewDB.findOneAndDelete({ _id: _id });
    return photo;
  } catch (ex: any) {
    return ex;
  }
}

async function updateProduct_review(
  id: string,
  updatedData: Partial<Product_review>
): Promise<Error | Product_review> {
  try {
    const existingProductReview = await Product_reviewDB.findById(id);

    if (!existingProductReview) {
      return new Error("Product review not found");
    }

    if (updatedData.Product) {
      existingProductReview.Product = updatedData.Product;
    }

    if (updatedData.User) {
      existingProductReview.User = updatedData.User;
    }

    if (updatedData.Message) {
      existingProductReview.Message = updatedData.Message;
    }

    if (updatedData.starRating) {
      existingProductReview.starRating = updatedData.starRating;
    }

    await existingProductReview.save();

    return existingProductReview;
  } catch (ex: any) {
    return new Error(ex.message);
  }
}
