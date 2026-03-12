import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 /*  persona = signal<Persona | null>(null); */
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  idCliente = signal<number>(0);

  login(): void {
    /* this.cargando.set(true);
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
      }); */
  }
}
