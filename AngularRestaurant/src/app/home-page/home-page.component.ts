import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  images = [
    {
      imageSrc: '../../assets/images/homeCarousel1.png',
      imageAlt: 'Bine ați venit La Studenți!',
    },
    {
      imageSrc: '../../assets/images/homeCarousel2.png',
      imageAlt: 'Bine ați venit La Studenți!',
    },
    {
      imageSrc: '../../assets/images/homeCarousel3.png',
      imageAlt: 'Bine ați venit La Studenți!',
    },
    {
      imageSrc: '../../assets/images/homeCarousel4.png',
      imageAlt: 'Bine ați venit La Studenți!',
    },
  ];
}
