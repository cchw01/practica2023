import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './templates/home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },

  //to modify component for the rest of the pages

  {path: 'menu', component: MenuComponent},
  {path: 'orders', component: HomePageComponent},
  {path: 'reservations', component: HomePageComponent},
  {path: 'contact', component: HomePageComponent},
  {path: 'reviewRestaurant', component: HomePageComponent},
  {path: 'login', component: HomePageComponent},
  {path: 'register', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = {
  HomePageComponent,
  MenuComponent
};
