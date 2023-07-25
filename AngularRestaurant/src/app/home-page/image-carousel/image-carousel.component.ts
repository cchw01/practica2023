import { Component, Input, OnInit } from '@angular/core';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  @Input() images: carouselImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  selectedIndex = 0;
  ngOnInit(): void {}
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  onPreviousClick(): void {
    if (this.selectedIndex === 0) this.selectedIndex = this.images.length - 1;
    else this.selectedIndex--;
  }
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) this.selectedIndex = 0;
    else this.selectedIndex++;
  }
}
