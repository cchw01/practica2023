import { Component, OnInit } from '@angular/core';
import { User } from '../app-logic/services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../app-logic/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  addUserForm!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
  ) {
    this.route.params.subscribe((params) => { });
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: [' ', Validators.required],
    });
  }

  OnSubmit() {
    //this.user = new User(this.addUserForm.value);
    console.log('OnSubmit from register');
    this.loginService.getUser(this.user);
  }

  hasError(field, errorType) {
    // Assume you have an errors object containing error messages for different fields
    const errors = {
      uname: {
        required: "Username is required.",
        // Add more error types and messages for the 'uname' field if needed
      },
      // Add more error messages for other fields if needed
    };
  
    // Check if the field exists in the errors object and if it has the specified errorType
    return errors[field] && errors[field][errorType];
  }

  const error = hasError('uname', 'required');
if (error) {
  console.log(error); // Output: "Username is required."
}

}
