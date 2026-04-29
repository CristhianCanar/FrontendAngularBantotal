import { Component, OnInit, signal } from '@angular/core';
import { Pais } from '../../../../@shared/models/paises/pais.model';
import { PaisesService } from '../../../../@shared/services/paises/paises-service';
import { LoadingSpinner } from "../../../../@shared/components/loading-spinner/loading-spinner";
import { ErrorAlert } from "../../../../@shared/components/error-alert/error-alert";
import { Table } from "../../../../@shared/components/table/table";

@Component({
  selector: 'app-paises-lista',
  standalone: true,
  imports: [LoadingSpinner, ErrorAlert, Table],
  templateUrl: './paises-lista.html',
  styleUrl: './paises-lista.css',
})
export class PaisesLista implements OnInit {
  paises: Pais[] = [];
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  columnas = [
    { key: 'identificador', label: 'ID' },
    { key: 'descripcion', label: 'Descripción' },
    { key: 'paisISO', label: 'ISO' },
    { key: 'paisUnicode', label: 'Unicode' }
  ];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises()
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
