import { TestBed, inject } from '@angular/core/testing';

import { DataBindingService } from './example.service';

describe('DataBindingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBindingService]
    });
  });

  it('should be created', inject([DataBindingService], (service: DataBindingService) => {
    expect(service).toBeTruthy();
  }));
});
