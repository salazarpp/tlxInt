import { TestBed } from '@angular/core/testing';

import { DatausaService } from './datausa.service';

describe('DatausaService', () => {
  let service: DatausaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatausaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
