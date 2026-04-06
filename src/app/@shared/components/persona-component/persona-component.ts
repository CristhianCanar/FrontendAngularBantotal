import { Component, OnInit, signal } from '@angular/core';
import { Persona } from '../../models/personas/persona.model';
import { ObtenerPersonaService } from '../../services/personas/obtener-persona-service';
import { ObtenerPersonaRequest } from '../../models/personas/obtener-persona-request.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-component',
  imports: [FormsModule],
  templateUrl: './persona-component.html',
  styleUrl: './persona-component.css',
})
export class PersonaComponent {
  persona = signal<Persona | null>(null);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  idCliente = signal<number>(0);

  constructor(private obtenerPersonaService: ObtenerPersonaService) { }

  buscarCliente(): void {
    this.cargando.set(true);
    const request: ObtenerPersonaRequest = {
      clienteUId: this.idCliente() // Convertir a número si es necesario
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
