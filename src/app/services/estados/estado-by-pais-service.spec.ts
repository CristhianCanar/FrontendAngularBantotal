import { TestBed } from '@angular/core/testing';

import { EstadoByPaisService } from './estado-by-pais-service';

describe('EstadoByPais', () => {
  let service: EstadoByPaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoByPaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
