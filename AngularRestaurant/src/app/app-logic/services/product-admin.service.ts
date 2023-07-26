import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductAdminService {
  productList?: Array<Product>;

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get<any>('http://localhost:80/product');
  }

  updateProduct(product: Product, id: any): void {
    const body = {
      _id: id,
      name: product.name,
      photo: product.photo,
      price: product.price,
      ingredientList: product.ingredientList,
      isAvailable: product.isAvailable,
    };
    this.http.put<any>('http://localhost:80/user/', body).subscribe();
  }
  getProductById(id?: string): Observable<Product> {
    return this.http.get<Product>('http://localhost:80/product/' + id);
  }
  deleteProduct(id?: string) {
    return this.http
      .delete<Product>('http://localhost:80/product/' + id)
      .subscribe(() => console.log('Delete successful'));
  }
  addProduct(product: Product) {
    this.http.post<Product>('http://localhost:80/product/', product).subscribe();
  }
}