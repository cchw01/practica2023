//import { ObjectId } from "mongoose";
import { Category } from "../models/category.model";
import { CategoryDB } from "../schema/category.schema";

export async function getAllCategories(): Promise<Error | Category[]> {

    try {
        const inventoryCategories = await CategoryDB.find();
        return inventoryCategories;
    } catch (ex: any) {
        return ex;
    }
}

export async function getCategoryById(categoryId: string): Promise<Error | Category | null> {
    
    try {
        const categoryById = await CategoryDB.findById(categoryId);
        return categoryById;
    } catch (ex: any) {
        return ex;
    }
}

export async function postCategory(category: Partial<Category>): Promise<Error | Category>{
    if (!category || !category.name) {
        
        return Error("The parameters given are not valid!");
    }
    try {
        const exists = await CategoryDB.findOne({ name: category.name });
        if (exists) {
          return Error("The item added to the database already exists!");
        }
    } catch (ex: any) {        
        return ex;
      }
    const NewCategory = new CategoryDB({
        name: category.name,
        productList: category.productList
    })
    NewCategory.save();
    return NewCategory;
}

export async function updateCategory(categoryId: string, newCategory: Category): Promise<Error | Category | string | null> {

    if (newCategory.name || newCategory.productList) {
      try {
        const findCategory = await CategoryDB.findByIdAndUpdate(
          { _id: categoryId },
          {
            name: newCategory.name,
            productList: newCategory.productList,
          }
        );
        if (findCategory == null)
            return "Could not find category!";
        console.log("updated");
        const categoryById = await CategoryDB.findById(newCategory);
        return categoryById;
      } catch (ex: any) {
        return ex;
      }
    } else {
      return "No attributes found!";
    }
}

export async function deleteCategory(categoryId: string): Promise<string | Error> {
    try {
        await CategoryDB.findByIdAndDelete(categoryId);
        return "Deleted category";
    } catch (ex: any) {
        return ex;
    }
}