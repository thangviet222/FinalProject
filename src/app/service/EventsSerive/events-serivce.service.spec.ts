import { TestBed, inject } from '@angular/core/testing';

import { EventsSerivceService } from './events-serivce.service';

describe('EventsSerivceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsSerivceService]
    });
  });

  it('should be created', inject([EventsSerivceService], (service: EventsSerivceService) => {
    expect(service).toBeTruthy();
  }));
});
