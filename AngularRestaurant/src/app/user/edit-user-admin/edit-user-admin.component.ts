import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAdminService } from '../../app-logic/services/user-admin.service';
import { User } from '../../app-logic/services/user';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-user-admin',
  templateUrl: './edit-user-admin.component.html',
  styleUrls: ['./edit-user-admin.component.css'],
})
export class EditUserAdminComponent implements OnInit {
  addUserForm!: FormGroup;
  user?: User;
  identifier?: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userAdmin: UserAdminService
  ) {
    this.route.params.subscribe((params) => {
      this.identifier = params['id'] ?? 0;
      console.log(params['id']);
    });
    this.addUserForm = this.fb.group({
      firstName: [this.user?.firstName],
      lastName: [this.user?.lastName],
      email: [this.user?.email, Validators.email],
      phoneNumber: [this.user?.phoneNumber, Validators.maxLength(10)],
      password: [this.user?.password, Validators.minLength(8)],
      role: [this.user?.role, Validators.required],
    });
  }
  async getUser(): Promise<User | null> {
    return await firstValueFrom(this.userAdmin.getUserById(this.identifier));
  }
  ngOnInit(): void {
    this.getUser().then((x) => {
      if (x) this.user = new User(x);
      console.log(this.user);
      this.addUserForm = this.fb.group({
        firstName: [this.user?.firstName],
        lastName: [this.user?.lastName],
        email: [this.user?.email, Validators.email],
        phoneNumber: [this.user?.phoneNumber, Validators.maxLength(10)],
        password: [this.user?.password, Validators.minLength(8)],
        role: [this.user?.role, Validators.required],
      });
    });
  }

  OnSubmit() {
    this.user = new User(this.addUserForm.value);
    this.userAdmin.updateUser(this.user, this.identifier);
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/user-admin']);
    }, 1000);
  }
  deleteUser() {
    this.userAdmin.deleteUser(this.identifier);
  }
}
