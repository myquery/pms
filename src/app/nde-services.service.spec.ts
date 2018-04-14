import { TestBed, inject } from '@angular/core/testing';

import { NdeServicesService } from './nde-services.service';

describe('NdeServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NdeServicesService]
    });
  });

  it('should be created', inject([NdeServicesService], (service: NdeServicesService) => {
    expect(service).toBeTruthy();
  }));
});
