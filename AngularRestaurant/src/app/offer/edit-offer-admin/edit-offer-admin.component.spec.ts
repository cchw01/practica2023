import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfferAdminComponent } from './edit-offer-admin.component';

describe('EditOfferAdminComponent', () => {
  let component: EditOfferAdminComponent;
  let fixture: ComponentFixture<EditOfferAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOfferAdminComponent]
    });
    fixture = TestBed.createComponent(EditOfferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
