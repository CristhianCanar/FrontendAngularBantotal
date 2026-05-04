import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObtenerEstadosByPaisRequest } from '../../models/estados/obtener-estados-by-pais-request.model';
import { Observable } from 'rxjs';
import { Estado } from '../../models/estados/estado.model';
import { ApiService } from '../api.service';
import { API_ENDPOINTS } from '../../../@core/constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {

  constructor(private apiService: ApiService) { }

  obtenerEstadosByPais(request: ObtenerEstadosByPaisRequest): Observable<Estado[]> {
    return this.apiService.get<Estado[]>(API_ENDPOINTS.ESTADOS.GET_BY_PAIS_ID(request.pais));
  }
}
