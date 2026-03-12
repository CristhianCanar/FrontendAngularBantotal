import { Component, OnInit, signal } from '@angular/core';
import { PaisesService } from '../../services/paises/paises-service';
import { ObtenerPaisesRequest } from '../../models/paises/obtener-paises-request.model';

@Component({
  selector: 'app-paises',
  imports: [],
  templateUrl: './paises.html',
  styleUrl: './paises.css',
})
export class Paises implements OnInit {

  paises: any[] = [];
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {

    const request: ObtenerPaisesRequest = {
      Btinreq: {
        Device: 'AV',
        Usuario: 'INSTALADOR',
        Requerimiento: '',
        Canal: 'BTDIGITAL',
        Token: 'd16a1af2d5CD285A89A23FBE'
      }
    };

    this.paisesService.obtenerPaises(request)
      .subscribe({
        next: (response) => {
          this.paises = response.sdtPaises.sBTPais;
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
