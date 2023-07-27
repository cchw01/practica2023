import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantReviewPageComponent } from './templates/restaurant-review-page/restaurant-review-page.component';
import { MenuComponent } from './menu/menu.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { EditUserAdminComponent } from './user/edit-user-admin/edit-user-admin.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { AddUserAdminComponent } from './user/add-user-admin/add-user-admin.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferAdminComponent } from './offer/admin-offer-page/admin-offer-page.component';
import { AddOfferAdminComponent } from './offer/add-offer-admin/add-offer-admin.component';
import { EditOfferAdminComponent } from './offer/edit-offer-admin/edit-offer-admin.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './admin-pages/product/product.component';
import { ContactComponent } from './contact/contact.component';
import { IngredientsComponent } from './ingredients-admin/ingredients/ingredients.component';
import { EditIngredientsComponent } from './ingredients-admin/edit-ingredients/edit-ingredients.component';
import { AddIngredientComponent } from './ingredients-admin/add-ingredient/add-ingredient.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'orders', component: HomePageComponent },
  { path: 'offer-admin', component: OfferAdminComponent },
  { path: 'offer-admin/add', component: AddOfferAdminComponent },
  { path: 'offer-admin/edit/:id', component: EditOfferAdminComponent },
  { path: 'reservations', component: ReservationComponent },
  {
    path: 'reservations/confirmedReservation',
    component: ConfirmReservationComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'user-admin/edit/:id', component: EditUserAdminComponent },
  { path: 'user-admin/add', component: AddUserAdminComponent },
  { path: 'reviewRestaurant', component: RestaurantReviewPageComponent },
  { path: 'productAdmin', component: ProductComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredients/edit/:id', component: EditIngredientsComponent },
  { path: 'ingredients/add', component: AddIngredientComponent },
];

//to modify component for the rest of the pages

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = {
  HomePageComponent,
  MenuComponent,
  ReservationComponent,
  LoginComponent,
  RegisterComponent,
  OfferAdminComponent,
  AddOfferAdminComponent,
  EditOfferAdminComponent,
  EditUserAdminComponent,
  EditIngredientsComponent,
};
