import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesLista } from './paises-lista';

describe('PaisesLista', () => {
  let component: PaisesLista;
  let fixture: ComponentFixture<PaisesLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisesLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
