import { ProductDB } from "../schemas/product.schemas";
import { Product } from "../models/product.model";

export async function postProduct(product: Product): Promise<Error | Product> {
  if (
    !product ||
    !product.name ||
    !product.photo ||
    !product.price ||
    !product.ingredientsList ||
    !product.isAvailable
    
    ) 
    return Error("The parameters given are not valid!");
    try {
        const nameExists = await ProductDB.findOne({ name:product.name });
        if (nameExists) {
          return Error("The product added to the database already exists!");
        }}
      catch (ex: any) {
        return ex;
      }
      const NewProduct = new ProductDB({
       name:product.name,
       price:product.price,
       isAvailable:product.isAvailable,
       photo:product.photo,
       ingredientsList:product.ingredientsList
      });
      await NewProduct.save();
      console.log("save product check");
      return NewProduct;
}

export async function getProduct(_id: string): Promise<Error | Product | null> {
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const product = await ProductDB.findOne<Product>({ _id: _id });
    return product;
  } catch (ex: any) {
    return ex;
  }
}

export async function getProducts(): Promise<Error | Product[]> {

  try {
    const products = await ProductDB.find<Product>({});
    return products;
  } catch (ex: any) {
    return Error(ex.message);
  }
}


export async function deleteProduct(_id: string) {
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const product = await ProductDB.findOneAndDelete({ _id: _id });
    return product;
  } catch (ex: any) {
    return ex;
  }
}

export async function updateProduct(newProduct:Partial<Product>): Promise<Error | Product | undefined> {
    if (!newProduct || typeof newProduct !== "object") {
      return Error("invalid params");
    }
  
    try {
        var updateResponse = await ProductDB.findOneAndUpdate<Product>({
          _id:newProduct
        }, 
        newProduct);
        
        if(updateResponse==null){
          return Error("Invalid");
        }
  
    } catch (ex: any) {
      return ex;
    }
  
    return undefined;
  }