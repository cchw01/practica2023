import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginRegisterNavComponent } from './login-register-nav/login-register-nav.component';
import { IconsComponent } from './icons/icons.component';
import { HomePageModule } from './home-page/home-page.module';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginRegisterNavComponent,
    IconsComponent,
    MenuComponent,
    ProductItemComponent,
    ProductPageComponent,
    CategorySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ScrollingModule,
    MatDividerModule,
    HomePageModule,
    MatButtonModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
