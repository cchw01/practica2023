import { Component } from '@angular/core';
import { User } from '../app-logic/services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../app-logic/services/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

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
    private registerservice: RegisterService,
    private dialog: MatDialog,
  ) {
    this.route.params.subscribe((params) => { });
  }

  ngOnInit(): void {
    this.addReviewForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  OnSubmit() {
    this.user = new User(this.addReviewForm.value);
    const dialogRef = this.dialog.open(PopupComponent, {
      data: { name: this.addReviewForm.value.firstName },
    });
    this.registerservice.addUser(this.user);
  }
}
