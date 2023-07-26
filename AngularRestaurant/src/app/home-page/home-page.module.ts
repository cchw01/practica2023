import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PageCardComponent } from './page-card/page-card.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HomePageComponent, ImageCarouselComponent, PageCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [HomePageComponent, ImageCarouselComponent, PageCardComponent],
})
export class HomePageModule {}
