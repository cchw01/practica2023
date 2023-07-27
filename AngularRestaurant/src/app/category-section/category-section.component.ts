import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Product } from '../interfaces/product.interface';
import { MenuService } from '../app-logic/services/menu.service';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent implements OnInit {
  
  @Input() category: Category = new Category();
  productsByCategoryList: Product[] = [];

  constructor(private productMenuService: MenuService) { }

  ngOnInit(): void {

    this.category.productList.forEach(product => {
      this.productMenuService.getProductById(product).subscribe(productFilter => {
        this.productsByCategoryList.push(productFilter);
      });
    });
  }

  isLastProduct(product: Product): boolean {
    return product == this.productsByCategoryList[this.productsByCategoryList.length - 1];
  }
}
