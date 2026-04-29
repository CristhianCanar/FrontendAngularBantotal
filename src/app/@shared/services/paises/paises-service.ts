import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Pais } from '../../models/paises/pais.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../@core/constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {

  constructor(private apiService: ApiService) { }

  obtenerPaises(): Observable<Pais[]> {
    return this.apiService.get<Pais[]>(API_ENDPOINTS.PAISES.GET_ALL);
  }
}
