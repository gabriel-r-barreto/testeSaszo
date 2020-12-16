import { TestBed } from '@angular/core/testing';

import { SystemService } from './system.service';

describe('LoginService', () => {
  let service: SystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
