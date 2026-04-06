import { TestBed } from '@angular/core/testing';

import { ObtenerPersonaService } from './obtener-persona-service';

describe('ObtenerPersonaService', () => {
  let service: ObtenerPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
