import { Component, signal } from '@angular/core';
import { SearchForm } from "../../../../@shared/components/search-form/search-form";
import { LoadingSpinner } from "../../../../@shared/components/loading-spinner/loading-spinner";
import { ErrorAlert } from "../../../../@shared/components/error-alert/error-alert";
import { ProfileCard } from "../../../../@shared/components/profile-card/profile-card";
import { EmptyState } from "../../../../@shared/components/empty-state/empty-state";
import { Persona } from '../../../../@shared/models/personas/persona.model';
import { ObtenerPersonaService } from '../../../../@shared/services/personas/obtener-persona-service';
import { ObtenerPersonaRequest } from '../../../../@shared/models/personas/obtener-persona-request.model';

@Component({
  selector: 'app-buscar-persona',
  imports: [SearchForm, LoadingSpinner, ErrorAlert, ProfileCard, EmptyState],
  templateUrl: './buscar-persona.html',
  styleUrl: './buscar-persona.css',
})
export class BuscarPersona {
  persona = signal<Persona | null>(null);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  idCliente = signal<number>(0);

  constructor(private obtenerPersonaService: ObtenerPersonaService) { }

  buscarCliente(): void {
    this.cargando.set(true);
    const request: ObtenerPersonaRequest = {
      clienteUId: this.idCliente() // Convertir a número
    };

    this.obtenerPersonaService.obtenerPersona(request)
      .subscribe({
        next: (response) => {

          this.persona.set(response);

          console.log(this.persona());
          this.cargando.set(false);
        },
        error: (error) => {
          console.error('Error al obtener persona', error);
          this.error.set('Error al cargar persona');
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
