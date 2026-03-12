import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDos } from './ejercicio-dos';

describe('EjercicioDos', () => {
  let component: EjercicioDos;
  let fixture: ComponentFixture<EjercicioDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioDos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
