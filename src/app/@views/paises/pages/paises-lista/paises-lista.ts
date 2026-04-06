import { Component, OnInit, signal } from '@angular/core';
import { PaisLocal } from '../../../../@shared/models/paises-local/pais-local.model';
import { PaisesLocalService } from '../../../../@shared/services/paises-local/paises-local-service';

@Component({
  selector: 'app-paises-lista',
  standalone: true,
  imports: [],
  templateUrl: './paises-lista.html',
  styleUrl: './paises-lista.css',
})
export class PaisesLista implements OnInit{
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
