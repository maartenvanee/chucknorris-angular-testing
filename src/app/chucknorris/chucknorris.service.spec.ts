import { TestBed, inject } from '@angular/core/testing';

import { ChucknorrisService } from './chucknorris.service';

describe('ChucknorrisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChucknorrisService]
    });
  });

  it('should be created', inject([ChucknorrisService], (service: ChucknorrisService) => {
    expect(service).toBeTruthy();
  }));
});
