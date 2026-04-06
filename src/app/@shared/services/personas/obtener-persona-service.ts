import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObtenerPersonaRequest } from '../../models/personas/obtener-persona-request.model';
import { Observable } from 'rxjs';
import { ObtenerPersonaResponse } from '../../models/personas/obtener-persona-response.model';
import { Persona } from '../../models/personas/persona.model';

@Injectable({
  providedIn: 'root',
})
export class ObtenerPersonaService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  obtenerPersona(request: ObtenerPersonaRequest): Observable<Persona> {

    const url = `${this.baseUrl}/clientes/${request.clienteUId}`;

    console.log('Obteniendo persona con clienteUId:', url);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.get<Persona>(url, { headers });
  }
}
