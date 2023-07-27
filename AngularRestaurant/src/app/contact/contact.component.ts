import { Component } from '@angular/core';
import { User } from '../app-logic/services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../app-logic/services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  addReviewForm!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private registerservice: RegisterService
  ) {
    this.route.params.subscribe((params) => {});
  }

  ngOnInit(): void {
    this.addReviewForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  OnSubmit() {
    this.user = new User(this.addReviewForm.value);
    console.log('OnSubmit from register');
    this.registerservice.addUser(this.user);
  }
}
