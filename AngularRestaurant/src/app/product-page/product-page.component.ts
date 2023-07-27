import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../app-logic/services/menu.service';
import { Product } from '../interfaces/product.interface';
import { Photo } from '../interfaces/photo.interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  productId!: string;
  product: Product = new Product();
  photo: Photo = new Photo();
  ingredientsList: string[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, private productMenuService: MenuService) {

    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'] ?? '';

      this.productMenuService.getProductById(this.productId).subscribe(product => {
        this.product = product;

        this.productMenuService.getPhotoById(this.product.photo).subscribe(photo => {
          this.photo = photo;
        });

        // WHY ???

        let ingredients: string[] = [];

        this.productMenuService.getIngredientList().subscribe(ingredient => {
          this.product.ingredientsList.forEach(ingredientFilter => {
            ingredients.push(ingredient.filter(x => x._id == ingredientFilter)[0].name);
            this.ingredientsList = ingredients;
          });
        });
      });
    });
  }
}
