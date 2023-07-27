import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../../interfaces/ingredient.interface';
import { Category } from '../../interfaces/category.interface';
import { Photo } from '../../interfaces/photo.interface';
import { ProductReview } from 'src/app/interfaces/productReview.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnInit {

  httpUrl: string = "http://localhost:80";

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.httpUrl + "/product");
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.httpUrl + '/product/' + id);
  }

  getIngredientList(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(this.httpUrl + "/ingredients");
  }

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.httpUrl + "/category");
  }

  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(this.httpUrl + "/category/" + id);
  }

  getPhotoList(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.httpUrl + "/photo");
  }

  getPhotoById(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(this.httpUrl + '/photo/' + id);
  }

  getProductReviewList(): Observable<ProductReview[]> {
    return this.httpClient.get<ProductReview[]>(this.httpUrl + "/product_review");
  }
}
