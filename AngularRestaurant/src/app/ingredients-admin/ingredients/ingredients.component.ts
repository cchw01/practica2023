import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { Ingredients } from 'src/app/app-logic/services/ingredient';
import { IngredientAdminService } from 'src/app/app-logic/services/ingredients-admin.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  constructor(private ingredientsService: IngredientAdminService) {}
  @ViewChild(MatPaginator, { static: true }) paginator?:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort, { static: true }) sort?: MatSort | undefined;
  ingredient: any;
  ingredientList!: any;
  ngOnInit(): void {
    this.ingredientsService.getData().subscribe((res: any) => {
      this.ingredientList = new MatTableDataSource<Ingredients>(res);
      this.ingredientList.paginator = this.paginator;
      this.ingredientList.sort = this.sort;
    });
  }

  deleteIngredient(id?: string) {

  }

  ingredientsAdminColumn: string[] = [
    'name',
    'stoc',
    'isAlergen',
    'actions',
  ];
}
