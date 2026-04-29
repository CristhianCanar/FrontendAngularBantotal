import { Injectable } from '@angular/core';
import { ObtenerPersonaRequest } from '../../models/personas/obtener-persona-request.model';
import { Observable } from 'rxjs';
import { Persona } from '../../models/personas/persona.model';
import { ApiService } from '../api.service';
import { API_ENDPOINTS } from '../../../@core/constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class ObtenerPersonaService {

  constructor(private apiService: ApiService) { }

  obtenerPersona(request: ObtenerPersonaRequest): Observable<Persona> {
    return this.apiService.get<Persona>(API_ENDPOINTS.PERSONAS.GET_BY_ID(request.clienteUId));
  }
}
