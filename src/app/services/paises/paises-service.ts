import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ObtenerPaisesRequest } from '../../models/paises/obtener-paises-request.model';
import { ObtenerPaisesResponse } from '../../models/paises/obtener-paises-response.model';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private baseUrl = '/btdeveloper/servlet';

  constructor(private http: HttpClient) {}

  obtenerPaises(request: ObtenerPaisesRequest): Observable<ObtenerPaisesResponse> {

    const url = `${this.baseUrl}/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPaises=`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.post<ObtenerPaisesResponse>(url, request, { headers });
  }
}
