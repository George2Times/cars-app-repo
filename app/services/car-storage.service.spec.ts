import { TestBed } from '@angular/core/testing';

import { CarStorageService } from './car-storage.service';

describe('CarStorageService', () => {
  let service: CarStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
