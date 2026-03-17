import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesLocalComponent } from './paises-local-component';

describe('PaisesLocalComponent', () => {
  let component: PaisesLocalComponent;
  let fixture: ComponentFixture<PaisesLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisesLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesLocalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
