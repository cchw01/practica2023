import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { EditUserAdminComponent } from './user/edit-user-admin/edit-user-admin.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { AddUserAdminComponent } from './user/add-user-admin/add-user-admin.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';
import { IngredientsComponent } from './ingredients-admin/ingredients/ingredients.component';
import { EditIngredientsComponent } from './ingredients-admin/edit-ingredients/edit-ingredients.component';
import { AddIngredientComponent } from './ingredients-admin/add-ingredient/add-ingredient.component';
import { ProductAdminComponent } from './product/product-admin/product-admin.component';
import { EditProductAdminComponent } from './product/edit-product-admin/edit-product-admin.component';
import { AddProductAdminComponent } from './product/add-product-admin/add-product-admin.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product/:id', component: ProductPageComponent },

  { path: 'orders', component: HomePageComponent },
  { path: 'reservations', component: ReservationComponent },
  {
    path: 'reservations/confirmedReservation',
    component: ConfirmReservationComponent,
  },
  { path: 'contact', component: HomePageComponent },
  { path: 'reviewRestaurant', component: HomePageComponent },
  { path: 'login', component: HomePageComponent },
  { path: 'register', component: HomePageComponent },
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'user-admin/edit/:id', component: EditUserAdminComponent },
  { path: 'user-admin/add', component: AddUserAdminComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredients/edit/:id', component: EditIngredientsComponent },
  { path: 'ingredients/add', component: AddIngredientComponent },
  { path: 'product-admin', component: ProductAdminComponent },
  { path: 'product-admin/edit/:id', component: EditProductAdminComponent },
  { path: 'product-admin/add', component: AddProductAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = {
  HomePageComponent,
  MenuComponent,
  ReservationComponent,
  EditUserAdminComponent,
  EditIngredientsComponent,
  ProductAdminComponent,
  EditProductAdminComponent,
  AddProductAdminComponent,
};
