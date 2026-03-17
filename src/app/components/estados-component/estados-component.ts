import { Component, signal } from '@angular/core';
import { Estado } from '../../models/estados/estado.model';
import { EstadoByPaisService } from '../../services/estados/estado-by-pais-service';
import { ObtenerEstadosByPaisRequest } from '../../models/estados/obtener-estados-by-pais-request.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estados-component',
  imports: [FormsModule],
  templateUrl: './estados-component.html',
  styleUrl: './estados-component.css',
})
export class EstadosComponent {
  estado = signal<Estado | null>(null);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  paisId = signal<number>(0);

  constructor(private estadoByPaisService: EstadoByPaisService) { }

  buscarEstado(): void {
    this.cargando.set(true);
    const request: ObtenerEstadosByPaisRequest = {
      pais: this.paisId()
    };

    this.estadoByPaisService.obtenerEstadosByPais(request)
      .subscribe({
        next: (response) => {

          this.estado.set(response[0]);

          console.log(this.estado());
          this.cargando.set(false);
        },
        error: (error) => {
          console.error('Error al obtener estado', error);
          this.error.set('Error al cargar estado');
        }
      });
  }

  formatDate(date: string | undefined): string {
    if (!date || date === '0000-00-00') return 'N/A';
    return new Date(date).toLocaleDateString();
  }

  clean(value: string | undefined): string {
    return value ? value.trim() : '-';
  }
}
