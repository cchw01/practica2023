import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/app-logic/services/product';
import { ProductService } from 'src/app/app-logic/product-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  ngOnInit(): void {}

  loadProducts() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        console.log(products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
