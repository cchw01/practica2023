import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  productList!: Product[];

  constructor(private productMenuService: MenuService) { }

  ngOnInit(): void {
    this.productMenuService.getProductList();
    //console.log(this.productList);
  }
}
