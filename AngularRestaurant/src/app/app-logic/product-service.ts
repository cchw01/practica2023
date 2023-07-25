import { Injectable } from '@angular/core';
import { Product } from './services/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(product: Product): void {
    this.http
      .post<any>('http://localhost:80/reviewRestaurant/restaurant', product)
      .subscribe((data) => {});
  }
  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:80/product');
  }
}