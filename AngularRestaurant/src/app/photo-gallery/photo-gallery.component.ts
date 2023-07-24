import { Component } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';
import { PhotoGalleryService } from '../services/photo-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  photoList: Photo[] = [];
  constructor (private photoService : PhotoGalleryService) {
    this.photoService.getPhotoList().subscribe(photo => {
      this.photoList = photo;
    })
  }
}

