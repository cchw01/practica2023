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
      email: ['', Validators.required],
    });
  }

  OnSubmit() {
    //this.user = new User(this.addUserForm.value);
    console.log('OnSubmit from register');
    this.loginService.loginUser(this.user);
  }

  hasError(field: string | number, errorType: string | number) {
    // Assume you have an errors object containing error messages for different fields
    const errors = {
      uname: {
        required: 'Username is required.',
        // Add more error types and messages for the 'uname' field if needed
      },
      // Add more error messages for other fields if needed
    };

    // Check if the field exists in the errors object and if it has the specified errorType
    return errors;
  }

  error = this.hasError('email', 'required');
  if(error: any) {
    console.log(error); // Output: "Username is required."
  }
}
