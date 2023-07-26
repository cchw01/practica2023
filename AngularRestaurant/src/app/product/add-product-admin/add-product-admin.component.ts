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
      name: [this.product?.name, Validators.required],
      photo: [this.product?.photo],
      price: [this.product?.price, Validators.required],
      ingredientsList: [this.product?.ingredientsList, Validators.required],
      isAvailable: [this.product?.isAvailable, Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productAdmin: ProductAdminService
  ) {
    this.AddProductForm = this.fb.group({
      name: [this.product?.name, Validators.required],
      photo: [this.product?.photo],
      price: [this.product?.price, Validators.required],
      ingredientsList: [this.product?.ingredientsList, Validators.required],
      isAvailable: [this.product?.isAvailable, Validators.required],
    });
  }

  OnSubmit(): void {
    this.AddProductForm.value.ingredientsList = this.parseIngredientsList(this.AddProductForm.value.ingredientsList)
    this.product = new Product(this.AddProductForm.value);
    this.productAdmin.addProduct(this.product);
    this.redirectToMainPage();
  }

  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/product-admin']);
    }, 1000);
  }

  isValidHexadecimal(hexString: string): boolean {
    const hexRegex = /^[0-9a-fA-F]{24}$/; // ObjectID is 24 characters hexadecimal string
    return hexRegex.test(hexString);
  }

  parseIngredientsList(ingredientsListString: string): string[] {
    const objectIdStrings = ingredientsListString.split(',').map((str) => str.trim());
    const objectIds: string[] = [];
  
    for (const objectIdString of objectIdStrings) {
      if (this.isValidHexadecimal(objectIdString)) {
        objectIds.push(objectIdString);
      } else {
        console.error(`Invalid ObjectID: ${objectIdString}`);
      }
    }
    return objectIds;
  }
}
