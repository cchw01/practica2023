import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategorySectionComponent } from './category-section/category-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductItemComponent,
    ProductPageComponent,
    CategorySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
