import { Routes } from '@angular/router';
import { PAISES_ROUTES } from '../../@views/paises/paises.routes';
import { PERSONAS_ROUTES } from '../../@views/personas/personas.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'paises', pathMatch: 'full' },
  { path: 'paises', loadChildren: () => PAISES_ROUTES },
  { path: 'personas', loadChildren: () => PERSONAS_ROUTES },
];
