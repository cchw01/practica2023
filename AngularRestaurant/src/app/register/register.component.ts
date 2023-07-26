import { Component, OnInit } from '@angular/core';
import { User } from '../app-logic/services/user';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { RegisterService } from '../app-logic/services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  addUserForm!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private registerservice: RegisterService
  ) {
    this.route.params.subscribe((params) => {});
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const hasNumber = /\d/.test(password);
    const hasLength = password.length >= 8;

    if (!hasNumber || !hasLength) {
      return { passwordRequirements: true };
    }

    return null;
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator]],
      email: ['', Validators.email],
      role: ['', Validators.required],
    }); // Apply the custom role validator
  }

  OnSubmit() {
    this.user = new User(this.addUserForm.value);
    console.log('OnSubmit from register');
    this.registerservice.addUser(this.user);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addUserForm.controls[controlName].hasError(errorName);
  };
}
