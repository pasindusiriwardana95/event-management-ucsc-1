import { TestBed } from '@angular/core/testing';

import { PumpBasicEventDataService } from './pump-basic-event-data.service';

describe('PumpBasicEventDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PumpBasicEventDataService = TestBed.get(PumpBasicEventDataService);
    expect(service).toBeTruthy();
  });
});
