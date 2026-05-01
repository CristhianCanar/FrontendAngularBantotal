import { Routes } from '@angular/router';
import { PaisesLista } from './pages/paises-lista/paises-lista';
import { VerEstado } from './pages/ver-estado/ver-estado';

export const PAISES_ROUTES: Routes = [
  {
    path: '',
    component: PaisesLista
  },
  {
    path: 'ver-estado',
    component: VerEstado
  },

];
