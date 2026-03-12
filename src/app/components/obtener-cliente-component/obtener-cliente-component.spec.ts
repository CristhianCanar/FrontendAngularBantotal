import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerClienteComponent } from './obtener-cliente-component';

describe('ObtenerClienteComponent', () => {
  let component: ObtenerClienteComponent;
  let fixture: ComponentFixture<ObtenerClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObtenerClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtenerClienteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
