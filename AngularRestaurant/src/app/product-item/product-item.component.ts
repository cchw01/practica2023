import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient.interface';
import { Product } from '../interfaces/product.interface';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { Photo } from '../interfaces/photo.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() isLast: boolean = false;
  photo: Photo = new Photo();
  ingredientsList: string[] = [];

  constructor(private router: Router, private productMenuService: MenuService) {

  }
  
  ngOnInit(): void {

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
  }

  viewProduct() {
    this.router.navigate(['/product/' + this.product._id]);
  }
}
