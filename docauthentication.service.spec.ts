import { TestBed } from '@angular/core/testing';

import { DocauthenticationService } from './docauthentication.service';

describe('DocauthenticationService', () => {
  let service: DocauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
