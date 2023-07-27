import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredients } from 'src/app/app-logic/services/ingredient';
import { IngredientAdminService } from 'src/app/app-logic/services/ingredients-admin.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent implements OnInit {
  ingredient?: Ingredients;
  AddIngredientForm!: FormGroup;
  ngOnInit(): void {
    this.AddIngredientForm = this.fb.group({
      name: [this.ingredient?.name, Validators.required],
      stoc: [this.ingredient?.stoc, Validators.required],
      isAlergen: [this.ingredient?.isAlergen, Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ingredientAdmin: IngredientAdminService
  ) {
    this.AddIngredientForm = this.fb.group({
      name: [this.ingredient?.name],
      stoc: [this.ingredient?.stoc],
      isAlergen: [this.ingredient?.isAlergen],
    });
  }

  OnSubmit(): void {
    this.ingredient = new Ingredients(this.AddIngredientForm.value);
    this.ingredientAdmin.addIngredient(this.ingredient);
    this.redirectToMainPage();
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/ingredients']);
    }, 1000);
  }
  instantRedirect() {
    this.router.navigate(['product-admin']);
  }
}

