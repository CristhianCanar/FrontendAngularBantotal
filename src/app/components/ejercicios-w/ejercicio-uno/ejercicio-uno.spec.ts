import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioUno } from './ejercicio-uno';

describe('EjercicioUno', () => {
  let component: EjercicioUno;
  let fixture: ComponentFixture<EjercicioUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioUno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioUno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
