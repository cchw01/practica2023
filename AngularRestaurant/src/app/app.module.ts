import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginRegisterNavComponent } from './login-register-nav/login-register-nav.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginRegisterNavComponent, IconsComponent,],
  imports: [BrowserModule, AppRoutingModule, MatIconModule,ScrollingModule,MatDividerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
