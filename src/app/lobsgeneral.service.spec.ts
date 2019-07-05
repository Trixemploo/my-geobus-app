import { TestBed } from '@angular/core/testing';

import { LobsgeneralService } from './lobsgeneral.service';

describe('LobsgeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LobsgeneralService = TestBed.get(LobsgeneralService);
    expect(service).toBeTruthy();
  });
});
