import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoGalleryService {

  httpUrl: string = "http://localhost:80";

  constructor(private httpClient: HttpClient) { }

  getPhotoList(): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.httpUrl + "/photo");
  }  
}

