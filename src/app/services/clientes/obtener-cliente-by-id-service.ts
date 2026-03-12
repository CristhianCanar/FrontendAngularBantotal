import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObtenerClienteByIdRequest } from '../../models/clientes/obtener-cliente-by-id-request.model';
import { Observable } from 'rxjs';
import { ObtenerClienteByIdResponse } from '../../models/clientes/obtener-cliente-by-id-response.model';

@Injectable({
  providedIn: 'root',
})
export class ObtenerClienteByIdService {
  private baseUrl = '/btdeveloper/servlet';

  constructor(private http: HttpClient) {}

  obtenerCliente(request: ObtenerClienteByIdRequest): Observable<ObtenerClienteByIdResponse> {

    const url = `${this.baseUrl}/com.dlya.bantotal.odwsbt_BTClientes_v1?Obtener=`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.post<ObtenerClienteByIdResponse>(url, request, { headers });
  }
}
