import { TestBed } from '@angular/core/testing';

import { GetProcessedInformationService } from './get-processed-information.service';

describe('GetProcessedInformationService', () => {
  let service: GetProcessedInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProcessedInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
