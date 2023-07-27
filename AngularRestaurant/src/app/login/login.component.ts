import { Component, OnInit } from '@angular/core';
import { User } from '../app-logic/services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../app-logic/services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserForm!: FormGroup;
  user!: User;
  email: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: RegisterService
  ) {
    this.route.params.subscribe((params) => {});
  }

  ngOnInit(): void {
    this.loginUserForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  OnSubmit() {
    const email = this.loginUserForm.value.email;
    const password = this.loginUserForm.value.password;
    this.loginService.loginUser(email, password);
  }

  hasError(field: string | number, errorType: string | number) {
    const errors = {
      uname: {
        required: 'Email is required.',
      },
    };
    return errors;
  }

  error = this.hasError('email', 'required');
  if(error: any) {
    console.log(error); // Output: "Email is required."
  }
}
