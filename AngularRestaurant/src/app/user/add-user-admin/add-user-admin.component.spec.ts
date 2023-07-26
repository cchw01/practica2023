import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAdminComponent } from './add-user-admin.component';

describe('AddUserAdminComponent', () => {
  let component: AddUserAdminComponent;
  let fixture: ComponentFixture<AddUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserAdminComponent]
    });
    fixture = TestBed.createComponent(AddUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
