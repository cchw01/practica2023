import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Schema } from 'mongoose';
import { Product } from 'src/app/app-logic/services/product';
import { ProductAdminService } from 'src/app/app-logic/services/product-admin.service';
import { Ingredient } from 'src/app/interfaces/ingredient.interface';
import { MenuService } from 'src/app/app-logic/services/menu.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css'],
})
export class ProductAdminComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator?:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort, { static: true }) sort?: MatSort | undefined;
  productAdmin: any;
  productList!: Array<Product>;
  ingredientsList: Ingredient[] = [];
  IngredientsString!: string;
  currentIngredients!: string;
  ngOnInit(): void {
    this.productService.getData().subscribe((data: Product[]) => {
      this.productList = data;
      this.IngredientsString = this.productList
        .map((product) => this.ObjectIdtoProductName(product.ingredientsList))
        .join(',');
    });
  }

  constructor(
    private productService: ProductAdminService,
    private productMenuService: MenuService
  ) {
    this.productMenuService.getIngredientList().subscribe((ingredient: any) => {
      this.ingredientsList = ingredient;
    });
  }

  productAdminColumn: string[] = [
    'name',
    'price',
    'listOfIngredients',
    'isAvailable',
    'actions',
  ];

  ObjectIdtoProductName(ingredientIds: Schema.Types.ObjectId[]): string {
    const StringsArray: string[] = [];
    ingredientIds.forEach((itemId) => {
      const ingredient = this.ingredientsList.find(
        (ingredient) => ingredient._id === itemId.toString()
      );
      if (ingredient) {
        StringsArray.push(ingredient.name);
      }
    });
    return StringsArray.join(',');
  }
}
