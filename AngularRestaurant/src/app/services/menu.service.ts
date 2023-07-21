import { Injectable, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnInit {

  http: string = "http://localhost:80";
  productList!: Observable<Product[]>;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Product[]>(this.http + "/product").subscribe((x) => {
      console.log("ssadasdads");
    });
   }

  ngOnInit(): void {
    
  }

  getProductList(): Observable<Product[]> {
    return this.productList;
  }
}
