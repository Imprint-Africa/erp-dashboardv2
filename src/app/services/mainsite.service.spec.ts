import { TestBed } from '@angular/core/testing';

import { MainsiteService } from './mainsite.service';

describe('MainsiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainsiteService = TestBed.get(MainsiteService);
    expect(service).toBeTruthy();
  });
});
