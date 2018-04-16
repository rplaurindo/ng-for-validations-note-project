import { TestBed, inject } from '@angular/core/testing';

import { TemplateDrivenService } from './template-driven.service';

describe('TemplateDrivenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateDrivenService]
    });
  });

  it('should be created', inject([TemplateDrivenService], (service: TemplateDrivenService) => {
    expect(service).toBeTruthy();
  }));
});
