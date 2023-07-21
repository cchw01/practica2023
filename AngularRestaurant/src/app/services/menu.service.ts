import { Injectable, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnInit {

  http: string = "http://localhost:80";
  productList!: Observable<Product[]>;

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.http + "/product");
  }

  getIngredientList(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(this.http + "/ingredients");
  }
}
