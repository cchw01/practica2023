import { Component, OnInit } from '@angular/core';
import { User } from '../app-logic/services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../app-logic/services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  addUserForm!: FormGroup;
  user: User = {
    _id: '64bda421c0206cbbee74ba34',
    firstName: 'stefan',
    lastName: 'chiper',
    phoneNumber: '12343125235',
    password: 'asdfasdgasdga',
    role: 'admin',
    email: 'stefan814759@gmail.com',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private registerservice: RegisterService
  ) {
    this.route.params.subscribe((params) => {});
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  OnSubmit() {
    //this.user = new User(this.addUserForm.value);
    console.log('OnSubmit from register');
    this.registerservice.addUser(this.user);
  }
}
