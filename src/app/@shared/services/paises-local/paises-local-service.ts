import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisLocal } from '../../models/paises-local/pais-local.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisesLocalService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  obtenerPaisesLocal(): Observable<PaisLocal[]> {

    const url = `${this.baseUrl}/paises`;

    console.log('Obteniendo PaisesLocal con clienteUId:', url);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.get<PaisLocal[]>(url, { headers });
  }
}
