import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { User } from 'src/app/app-logic/services/user';
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
      this.ingredientList = new MatTableDataSource<User>(res);
      this.ingredientList.paginator = this.paginator;
      this.ingredientList.sort = this.sort;
    });
  }

  deleteUser(id?: string) {
    // let result = confirm('Do you want to delete the user?');
    // if (result) {
    //   this.userService.deleteUser();
    //   var target = id.target || id.srcElement || id.currentTarget;
    //   var idAttr = target.attributes.id;
    //   this.userService.deleteUser(idAttr);
    // }
  }

  ingredientsAdminColumn: string[] = [
    'name',
    'stoc',
    'isAlergen',
  ];
}
