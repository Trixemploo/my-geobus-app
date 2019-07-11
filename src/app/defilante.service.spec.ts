import { TestBed } from '@angular/core/testing';

import { DefilanteService } from './defilante.service';

describe('DefilanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefilanteService = TestBed.get(DefilanteService);
    expect(service).toBeTruthy();
  });
});
