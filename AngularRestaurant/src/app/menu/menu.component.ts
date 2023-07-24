import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Product } from '../interfaces/product.interface';
import { Ingredient } from '../interfaces/ingredient.interface';
import { Category } from '../interfaces/category.interface';
import { Photo } from '../interfaces/photo.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  productList: Product[] = [];
  ingredientsList: Ingredient[] = [];
  categoryList: Category[] = [];
  photoList: Photo[] = [];

  constructor(private productMenuService: MenuService) {

    this.productMenuService.getProductList().subscribe(product => {
      this.productList = product;
    });

    this.productMenuService.getIngredientList().subscribe(ingredient => {
      this.ingredientsList = ingredient;
    });

    this.productMenuService.getCategoryList().subscribe(category => {
      this.categoryList = category;
    });

    this.productMenuService.getPhotoList().subscribe(photo => {
      this.photoList = photo;
    });
  }

  ngOnInit(): void {

  }
}
