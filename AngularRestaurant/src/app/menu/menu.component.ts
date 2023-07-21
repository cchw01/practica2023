import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  productList!: Product[];
  ingredientList!: Ingredient[];

  constructor(private productMenuService: MenuService) {
    this.productMenuService.getProductList().subscribe(product => {
      this.productList = product;
    });
    this.productMenuService.getIngredientList().subscribe(ingredient => {
      this.ingredientList = ingredient;
      console.log(ingredient);
    })
    console.log(this.productList);
    console.log(this.ingredientList);
  }

  ngOnInit(): void {
    // this.productList = this.productMenuService.getProductList();
    // console.log(this.productList);
  }

  onClick() {
    console.log(this.ingredientList);
  }
}
