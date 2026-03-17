import { TestBed } from '@angular/core/testing';

import { PaisesLocalService } from './paises-local-service';

describe('PaisesLocalService', () => {
  let service: PaisesLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
