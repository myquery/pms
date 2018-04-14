import { TestBed, inject } from '@angular/core/testing';

import { ConfigservicesService } from './configservices.service';

describe('ConfigservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigservicesService]
    });
  });

  it('should be created', inject([ConfigservicesService], (service: ConfigservicesService) => {
    expect(service).toBeTruthy();
  }));
});
