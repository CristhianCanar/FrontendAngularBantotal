import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersona } from './buscar-persona';

describe('BuscarPersona', () => {
  let component: BuscarPersona;
  let fixture: ComponentFixture<BuscarPersona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarPersona]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPersona);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
