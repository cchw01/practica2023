import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterNavComponent } from './login-register-nav.component';

describe('LoginRegisterNavComponent', () => {
  let component: LoginRegisterNavComponent;
  let fixture: ComponentFixture<LoginRegisterNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegisterNavComponent]
    });
    fixture = TestBed.createComponent(LoginRegisterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
