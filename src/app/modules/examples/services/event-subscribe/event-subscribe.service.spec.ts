import { TestBed, inject } from '@angular/core/testing';

import { EventSubscribeService } from './event-subscribe.service';

describe('EventSubscribeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventSubscribeService]
    });
  });

  it('should be created', inject([EventSubscribeService], (service: EventSubscribeService) => {
    expect(service).toBeTruthy();
  }));
});
