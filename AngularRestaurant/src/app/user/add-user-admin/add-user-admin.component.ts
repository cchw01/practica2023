import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/app-logic/services/user';
import { UserAdminService } from 'src/app/app-logic/services/user-admin.service';

@Component({
  selector: 'app-add-user-admin',
  templateUrl: './add-user-admin.component.html',
  styleUrls: ['./add-user-admin.component.css'],
})
export class AddUserAdminComponent implements OnInit {
  user?: User;
  AddUserForm!: FormGroup;
  ngOnInit(): void {
    this.AddUserForm = this.fb.group({
      firstName: [this.user?.firstName, Validators.required],
      lastName: [this.user?.lastName, Validators.required],
      email: [this.user?.email, Validators.email, Validators.required],
      phoneNumber: [
        this.user?.phoneNumber,
        Validators.maxLength(10),
        Validators.required,
      ],
      password: [
        this.user?.password,
        Validators.minLength(8),
        Validators.required,
      ],
      role: [this.user?.role, Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userAdmin: UserAdminService
  ) {
    this.AddUserForm = this.fb.group({
      firstName: [this.user?.firstName],
      lastName: [this.user?.lastName],
      email: [this.user?.email, Validators.email],
      phoneNumber: [this.user?.phoneNumber, Validators.maxLength(10)],
      password: [this.user?.password, Validators.minLength(8)],
      role: [this.user?.role, Validators.required],
    });
  }

  OnSubmit(): void {
    this.user = new User(this.AddUserForm.value);
    this.userAdmin.addUser(this.user);
    this.redirectToMainPage();
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/user-admin']);
    }, 1000);
  }
  instantRedirect() {
    this.router.navigate(['/user-admin']);
  }
}
