import { Component, OnInit, signal } from '@angular/core';
import { LoadingSpinner } from "../../../../@shared/components/loading-spinner/loading-spinner";
import { ErrorAlert } from "../../../../@shared/components/error-alert/error-alert";
import { Table } from "../../../../@shared/components/table/table";
import { FormsModule } from '@angular/forms';
import { Estado } from '../../../../@shared/models/estados/estado.model';
import { EstadosService } from '../../../../@shared/services/estados/estados-service';
import { ObtenerEstadosByPaisRequest } from '../../../../@shared/models/estados/obtener-estados-by-pais-request.model';

@Component({
  selector: 'app-ver-estado',
  standalone: true,
  imports: [FormsModule, LoadingSpinner, ErrorAlert, Table],
  templateUrl: './ver-estado.html',
  styleUrl: './ver-estado.css',
})
export class VerEstado {
  estado = signal<Estado | null>(null);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);
  paisId = signal<number>(0);


  constructor(private estadosService: EstadosService) { }

  buscarEstado(): void {
    this.cargando.set(true);
    const request: ObtenerEstadosByPaisRequest = {
      pais: this.paisId()
    };

    this.estadosService.obtenerEstadosByPais(request)
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
}
