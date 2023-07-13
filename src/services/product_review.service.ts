import { Product_reviewDB } from "../schemas/product_review.schema";
import { Product_review } from "../models/product_review.model";
//import p from "proxyquire";

export {
  getProduct_review,
  saveProduct_review,
  getProduct_reviews,
  //   deleteProduct_reviews,
  //   updateProduct_review,
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
  product_review: Partial<Product_review>
): Promise<Product_review> {
  if (!product_review || !(product_review instanceof Object)) {
    throw new Error("Review is required");
  }

  if (!product_review.Product || typeof product_review.Product !== "string") {
    throw new Error("Invalid product");
  }

  if (
    !product_review.reviewDate ||
    typeof product_review.reviewDate !== "string"
  ) {
    throw new Error("Invalid review date");
  }

  if (!product_review.User || typeof product_review.User !== "string") {
    throw new Error("Invalid user");
  }

  if (!product_review.Message || typeof product_review.Message !== "string") {
    throw new Error("Invalid message");
  }

  if (
    !product_review.starRating ||
    typeof product_review.starRating !== "string"
  ) {
    throw new Error("Invalid star rating");
  }

  const product_reviewModel = new Product_reviewDB({
    Product: product_review.Product,
    reviewDate: product_review.reviewDate,
    User: product_review.User,
    Message: product_review.Message,
    starRating: product_review.starRating,
  });

  try {
    await product_reviewModel.save();
  } catch (ex: any) {
    throw new Error(ex.message);
  }

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

// async function deletePhoto(_id: string): Promise<Error | Photo | null> {}

// async function updatePhoto(
//   newPhoto: Partial<Photo>
// ): Promise<Error | Photo | null> {}
