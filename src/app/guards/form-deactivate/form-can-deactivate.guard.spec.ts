import { TestBed, async, inject } from '@angular/core/testing';

import { FormCanDeactivate } from './form-can-deactivate.guard';


describe('FormCanDeactivate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCanDeactivate]
    });
  });

  it('should ...', inject([FormCanDeactivate], (guard: FormCanDeactivate) => {
    expect(guard).toBeTruthy();
  }));
});
