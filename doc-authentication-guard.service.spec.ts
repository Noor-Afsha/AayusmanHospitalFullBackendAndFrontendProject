import { TestBed } from '@angular/core/testing';

import { DocAuthenticationGuardService } from './doc-authentication-guard.service';

describe('DocAuthenticationGuardService', () => {
  let service: DocAuthenticationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocAuthenticationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
