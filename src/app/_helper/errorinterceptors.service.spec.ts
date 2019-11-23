import { TestBed } from '@angular/core/testing';

import { ErrorinterceptorsService } from './errorinterceptors.service';

describe('ErrorinterceptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorinterceptorsService = TestBed.get(ErrorinterceptorsService);
    expect(service).toBeTruthy();
  });
});
