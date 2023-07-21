import { Injectable, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnInit {

  httpClient: string = "http://localhost:80/product";
  productList!: Product[];

  constructor() { }

  ngOnInit(): void {
      
  }
}
