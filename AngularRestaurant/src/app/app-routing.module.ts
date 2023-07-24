import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [{path: '', component: PhotoGalleryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
