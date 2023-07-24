import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserAdminComponent } from './edit-user-admin/edit-user-admin.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';

const routes: Routes = [ 
  { path: '', component: UserAdminComponent },
  { path: 'edit/:id', component: EditUserAdminComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  EditUserAdminComponent
];