import { TestBed } from '@angular/core/testing';

import { AdminauthenticationService } from './adminauthentication.service';

describe('AdminauthenticationService', () => {
  let service: AdminauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
