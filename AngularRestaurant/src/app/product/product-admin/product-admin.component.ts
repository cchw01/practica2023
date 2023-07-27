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
  ArrayOfIngredients: string[] = [];
  IngredientsString!: string;
  ngOnInit(): void {
    this.productService.getData().subscribe((data: Product[]) => {
      this.productList = data;
      this.ObjectIdtoString();
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

  ObjectIdtoString(): string {
    this.ingredientsList.forEach((element) => {
      this.ArrayOfIngredients.push(element.name);
    })
    this.IngredientsString = this.ArrayOfIngredients.join(",");
    return this.IngredientsString;
  }
}
