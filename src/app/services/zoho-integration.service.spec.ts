import { TestBed } from '@angular/core/testing';

import { ZohoIntegrationService } from './zoho-integration.service';

describe('ZohoIntegrationService', () => {
  let service: ZohoIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZohoIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
