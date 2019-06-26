import { TestBed } from '@angular/core/testing';

import { LobsService } from './lobs.service';

describe('LobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LobsService = TestBed.get(LobsService);
    expect(service).toBeTruthy();
  });
});
