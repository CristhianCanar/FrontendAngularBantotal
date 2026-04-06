import { Component, OnInit, signal } from '@angular/core';
import { PaisesLocalService } from '../../services/paises-local/paises-local-service';
import { PaisLocal } from '../../models/paises-local/pais-local.model';

@Component({
  selector: 'app-paises-local-component',
  imports: [],
  templateUrl: './paises-local-component.html',
  styleUrl: './paises-local-component.css',
})
export class PaisesLocalComponent implements OnInit{
  paises: PaisLocal[] = [];
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private paisesLocalService: PaisesLocalService) { }

  ngOnInit(): void {
    this.paisesLocalService.obtenerPaisesLocal()
      .subscribe({
        next: (response) => {
          this.paises = response;
          console.log(this.paises);
          this.cargando.set(false);
        },
        error: (error) => {
          console.error('Error al obtener países', error);
          this.error.set('Error al cargar el país');
        }
      });
  }
}
