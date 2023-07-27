import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientAdminService } from '../../app-logic/services/ingredients-admin.service';
import { Ingredients } from '../../app-logic/services/ingredient';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-ingredients',
  templateUrl: './edit-ingredients.component.html',
  styleUrls: ['./edit-ingredients.component.css'],
})
export class EditIngredientsComponent implements OnInit {
  addIngredientForm!: FormGroup;
  ingredient?: Ingredients;
  identifier?: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ingredientAdmin: IngredientAdminService
  ) {
    this.route.params.subscribe((params) => {
      this.identifier = params['id'] ?? 0;
      console.log(params['id']);
    });
    this.addIngredientForm = this.fb.group({
      name: [this.ingredient?.name],
      stoc: [this.ingredient?.stoc],
      isAlergen: [this.ingredient?.isAlergen],
    });
  }
  async getIngredient(): Promise<Ingredients | null> {
    return await firstValueFrom(this.ingredientAdmin.getIngredientById(this.identifier));
  }
  ngOnInit(): void {
    this.getIngredient().then((x) => {
      if (x) this.ingredient = new Ingredients(x);
      console.log(this.ingredient);
      this.addIngredientForm = this.fb.group({
        name: [this.ingredient?.name],
        stoc: [this.ingredient?.stoc],
        isAlergen: [this.ingredient?.isAlergen],
      });
    });
  }


  OnSubmit() {
    this.ingredient = new Ingredients(this.addIngredientForm.value);
    this.ingredientAdmin.updateIngredient(this.ingredient, this.identifier);
  }

  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/ingredients']);
    }, 1000);
  }

  deleteingredient() {
    this.ingredientAdmin.deleteIngredient(this.identifier);
    this.router.navigate(['/ingredients']);
  }
}
