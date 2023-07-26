import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ObjectId } from 'mongoose';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/app-logic/services/product';
import { ProductAdminService } from 'src/app/app-logic/services/product-admin.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})

export class ProductAdminComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator?:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort, { static: true }) sort?: MatSort | undefined;
  productAdmin: any;
  productList!: Array<Product>;
  ngOnInit(): void {
    this.productList = this.productService.getData();
  }

  constructor(private productService: ProductAdminService) {}

  productAdminColumn: string[] = [
    'name',
    'photo',
    'price',
    'listOfIngredients',
    'isAvailable',
    'actions',
  ];

  objectIdtoString(ArrayOfObjectIds: ObjectId[]): string {
    const arrayOfStrings: string[] = ArrayOfObjectIds.map((ingredientId) => ingredientId.toString());
    arrayOfStrings.forEach((element) => {
      let Ingredient = this.productService.getProductById(element);
      console.log(Ingredient);
    })
    return 'aici avem ceva ingrediente';
  }
}