import { TestBed, inject } from '@angular/core/testing';

import { NgFormValidations } from './service';

describe('NgFormValidations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFormValidations]
    });
  });

  it('should be created', inject([NgFormValidations], (service: NgFormValidations) => {
    expect(service).toBeTruthy();
  }));
});
