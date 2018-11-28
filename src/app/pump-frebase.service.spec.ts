import { TestBed } from '@angular/core/testing';

import { PumpFrebaseService } from './pump-frebase.service';

describe('PumpFrebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PumpFrebaseService = TestBed.get(PumpFrebaseService);
    expect(service).toBeTruthy();
  });
});
