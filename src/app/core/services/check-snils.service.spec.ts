import { TestBed } from '@angular/core/testing';

import { CheckSnilsService } from './check-snils.service';

describe('CheckSnilsService', () => {
  let service: CheckSnilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckSnilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
