import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferAdminService } from '../../app-logic/services/offer-admin.service';
import { OfferService } from '../../app-logic/services/offer.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-offer-admin',
  templateUrl: './edit-offer-admin.component.html',
  styleUrls: ['./edit-offer-admin.component.css'],
})
export class EditOfferAdminComponent implements OnInit {
  editOfferForm!: FormGroup;
  offer?: OfferService;
  identifier?: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private offerAdmin: OfferAdminService
  ) {
    this.route.params.subscribe((params) => {
      this.identifier = params['id'] ?? 0;
      console.log(params['id']);
      this.editOfferForm = this.fb.group({
        productList: [''],
        discountPercent: [''],
        startDate: [''],
        endDate: [''],
      });
    });
  }
  async getOffer(): Promise<OfferService | null> {
    return await firstValueFrom(this.offerAdmin.getOfferById(this.identifier));
  }
  ngOnInit(): void {
    this.getOffer().then((x) => {
      if (x) this.offer = new OfferService(x);
      console.log(this.offer);
      this.editOfferForm = this.fb.group({
        productList: [this.offer?.productList],
        discountPercent: [this.offer?.discountPercent],
        startDate: [this.offer?.startDate.toString().split('T')[0]],
        endDate: [this.offer?.endDate.toString().split('T')[0]],
      });
    });
  }

  OnSubmit() {
    this.offer = new OfferService(this.editOfferForm.value);
    this.offerAdmin.updateOffer(this.offer, this.identifier);
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/offer-admin']);
    }, 1000);
  }
  deleteOffer() {
    this.offerAdmin.deleteOffer(this.identifier);
    this.router.navigate(['/offer-admin']);
  }
}
