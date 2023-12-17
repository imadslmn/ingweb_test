import { TestBed } from '@angular/core/testing';

import { ServiceStgService } from './service-stg.service';

describe('ServiceStgService', () => {
  let service: ServiceStgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
