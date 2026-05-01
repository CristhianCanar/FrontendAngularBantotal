import { Component, OnInit, signal } from '@angular/core';
import { LoadingSpinner } from "../../../../@shared/components/loading-spinner/loading-spinner";
import { ErrorAlert } from "../../../../@shared/components/error-alert/error-alert";
import { FormsModule } from '@angular/forms';
import { Estado } from '../../../../@shared/models/estados/estado.model';
import { EstadosService } from '../../../../@shared/services/estados/estados-service';
import { ObtenerEstadosByPaisRequest } from '../../../../@shared/models/estados/obtener-estados-by-pais-request.model';
import { DetailCard } from "../../../../@shared/components/detail-card/detail-card";
import { EmptyState } from "../../../../@shared/components/empty-state/empty-state";
import { SearchForm } from "../../../../@shared/components/search-form/search-form";

@Component({
  selector: 'app-ver-estado',
  standalone: true,
  imports: [FormsModule, LoadingSpinner, ErrorAlert, DetailCard, DetailCard, EmptyState, SearchForm],
  templateUrl: './ver-estado.html',
  styleUrl: './ver-estado.css',
})
export class VerEstado {
  estado = signal<Estado | null>(null);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  paisId = signal<number>(0);

  columnas = [
    { key: 'identificador', label: 'ID Estado', icon: 'bi bi-hash' },
    { key: 'descripcion', label: 'Descripción', icon: 'bi bi-card-text' },
  ]

  constructor(private estadosService: EstadosService) { }

  onSearch(idPais: number) {
    this.paisId.set(idPais);
    this.buscarEstado();
  }

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
