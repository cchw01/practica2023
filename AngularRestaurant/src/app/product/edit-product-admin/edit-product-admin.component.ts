import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAdminService } from '../../app-logic/services/product-admin.service';
import {Product } from '../../../../../RestaurantBackend/src/models/product.model'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-product-admin',
  templateUrl: './edit-product-admin.component.html',
  styleUrls: ['./edit-product-admin.component.css'],
})
export class EditProductAdminComponent implements OnInit {
  addProductForm!: FormGroup;
  product?: Product;
  identifier?: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productAdmin: ProductAdminService
  ) {
    this.route.params.subscribe((params) => {
      this.identifier = params['id'] ?? 0;
      console.log(params['id']);
    });
    this.addProductForm = this.fb.group({
      name: [this.product?.name,Validators.required],
      isAvalable: [this.product?.isAvailable,Validators.required],
      ingredientsList: [this.product?.ingredientsList],
      photo: [this.product?.photo],
      price:[this.product?.price]
    });
  }
  async getProduct(): Promise<Product | null> {
    return await firstValueFrom(this.productAdmin.getProductById(this.identifier));
  }
  ngOnInit(): void {
    this.getProduct().then((x) => {
      if (x) this.product = new Product(x);
      console.log(this.product);
      this.addProductForm = this.fb.group({
        name: [this.product?.name],
        price: [this.product?.price],
        isAvailable: [this.product?.isAvailable, Validators.requiredTrue],
        ingredientsList: [this.product?.ingredientsList],
      });
    });
  }

  OnSubmit() {
    this.product = new Product(this.addProductForm.value);
    this.productAdmin.updateProduct(this.product, this.identifier);
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/user-admin']);
    }, 1000);
  }
  deleteUser() {
    this.productAdmin.deleteProduct(this.identifier);
  }
}