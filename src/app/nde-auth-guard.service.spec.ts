import { TestBed, inject } from '@angular/core/testing';

import { NdeAuthGuardService } from './nde-auth-guard.service';

describe('NdeAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NdeAuthGuardService]
    });
  });

  it('should be created', inject([NdeAuthGuardService], (service: NdeAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
