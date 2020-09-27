import { TestBed, inject } from '@angular/core/testing';

import { DialpadService } from './dialpad.service';

describe('DialpadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialpadService]
    });
  });

  it('should be created', inject([DialpadService], (service: DialpadService) => {
    expect(service).toBeTruthy();
  }));
});
