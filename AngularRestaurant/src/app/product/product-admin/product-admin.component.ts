import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  deleteProduct(id?: string) {
    
  }

  productAdminColumn: string[] = [
    'name',
    'photo',
    'price',
    'ingredientsList',
    'isAvailable',
    'actions',
  ];
}