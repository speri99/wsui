import { TestBed } from '@angular/core/testing';

import { MentorserviceService } from './mentorservice.service';

describe('MentorserviceService', () => {
  let service: MentorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
