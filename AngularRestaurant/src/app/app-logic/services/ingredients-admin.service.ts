import { Injectable } from '@angular/core';
import { Ingredients } from './ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IngredientAdminService {
  ingredientList?: Array<Ingredients>;

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get<any>('http://localhost:80/ingredients');
  }

  updateIngredient(ingredient: Ingredients, id: any): void {
    const body = {
      _id: id,
      name: ingredient.name,
      stoc: ingredient.stoc,
      isAlergen: ingredient.isAlergen,
    };
    this.http.put<any>('http://localhost:80/ingredients/', body).subscribe();
  }
  getIngredientById(id?: string): Observable<Ingredients> {
    return this.http.get<Ingredients>('http://localhost:80/ingredients/' + id);
  }
  deleteIngredient(id?: string) {
    return this.http
      .delete<Ingredients>('http://localhost:80/ingredients/' + id)
      .subscribe(() => console.log('Delete successful'));
  }
  addIngredient(ingredient: Ingredients) {
    this.http.post<Ingredients>('http://localhost:80/ingredients/', ingredient).subscribe();
  }
}
