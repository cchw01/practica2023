import { TestBed } from '@angular/core/testing';

import { UserCookieManagmentService } from './user-cookie-managment.service';

describe('UserCookieManagmentService', () => {
  let service: UserCookieManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCookieManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
