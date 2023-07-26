import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/app-logic/services/product';
import { ProductAdminService } from 'src/app/app-logic/services/product-admin.service';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.css'],
})
export class AddProductAdminComponent implements OnInit {
  product?: Product;
  AddProductForm!: FormGroup;

  ngOnInit(): void {
    this.AddProductForm = this.fb.group({
      Name: [this.product?.name, Validators.required],
      Photo: [this.product?.photo],
      Price: [this.product?.price, Validators.required],
      ListOfIngredients: [this.product?.ingredientList, Validators.required],
      Availability: [this.product?.isAvailable, Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productAdmin: ProductAdminService
  ) {
    this.AddProductForm = this.fb.group({
      Name: [this.product?.name, Validators.required],
      Photo: [this.product?.photo],
      Price: [this.product?.price, Validators.required],
      ListOfIngredients: [this.product?.ingredientList, Validators.required],
      Availability: [this.product?.isAvailable, Validators.required],
    });
  }

  OnSubmit(): void {
    this.product = new Product(this.AddProductForm.value);
    this.productAdmin.addProduct(this.product);
    this.redirectToMainPage();
  }

  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/product-admin']);
    }, 1000);
  }
}
