import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductAdminComponent } from './edit-product-admin.component';

describe('EditUserAdminComponent', () => {
  let component: EditProductAdminComponent;
  let fixture: ComponentFixture<EditProductAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductAdminComponent]
    });
    fixture = TestBed.createComponent(EditProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});