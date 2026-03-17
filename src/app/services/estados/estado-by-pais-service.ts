import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObtenerEstadosByPaisRequest } from '../../models/estados/obtener-estados-by-pais-request.model';
import { Observable } from 'rxjs';
import { Estado } from '../../models/estados/estado.model';

@Injectable({
  providedIn: 'root',
})
export class EstadoByPaisService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  obtenerEstadosByPais(request: ObtenerEstadosByPaisRequest): Observable<Estado[]> {

    const url = `${this.baseUrl}/paises/estados/${request.pais}`;

    console.log('Obteniendo Estados con Pais ID:', url);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.get<Estado[]>(url, { headers });
  }
}
