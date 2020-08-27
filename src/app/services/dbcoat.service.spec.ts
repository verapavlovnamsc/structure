import { TestBed } from '@angular/core/testing';

import { DbcoatService } from './dbcoat.service';

describe('DbcoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbcoatService = TestBed.get(DbcoatService);
    expect(service).toBeTruthy();
  });
});


