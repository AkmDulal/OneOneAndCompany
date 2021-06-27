import { TestBed } from '@angular/core/testing';

import { DataviewService } from './dataview.service';

describe('DataviewService', () => {
  let service: DataviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
