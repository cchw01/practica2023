import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAdminService } from '../app-logic/services/user-admin.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../app-logic/services/user';



@Component({
  selector: 'app-edit-user-admin',
  templateUrl: './edit-user-admin.component.html',
  styleUrls: ['./edit-user-admin.component.css']
})
export class EditUserAdminComponent implements OnInit {
  addUserForm!: FormGroup;
  user?:User;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userAdmin: UserAdminService
  ) {
    this.route.params.subscribe((params) => {});
  }
  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: ['', Validators.maxLength(10)],
      password: ['', Validators.minLength(8)],
      role :['', Validators.required]
    });
  }

  OnSubmit() {
    this.user = new User(this.addUserForm.value);
   this.userAdmin.updateUser(this.user);

  }
}
