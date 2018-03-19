import { TestBed, inject } from '@angular/core/testing';

import { InterpolationService } from './interpolation.service';

describe('InterpolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterpolationService]
    });
  });

  it('should be created', inject([InterpolationService], (service: InterpolationService) => {
    expect(service).toBeTruthy();
  }));
});
