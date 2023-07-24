import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: 'product/:id', component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
