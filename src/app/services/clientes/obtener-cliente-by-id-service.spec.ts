import { TestBed } from '@angular/core/testing';

import { ObtenerClienteByIdService } from './obtener-cliente-by-id-service';

describe('ObtenerClienteByIdService', () => {
  let service: ObtenerClienteByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerClienteByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
