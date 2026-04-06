import { Routes } from '@angular/router';
//import { Home } from '../../@shared/components/home/home';
//import { Paises } from '../../@shared/components/paises/paises';
//import { ObtenerClienteComponent } from '../../@shared/components/obtener-cliente-component/obtener-cliente-component';
//import { PersonaComponent } from '../../@shared/components/persona-component/persona-component';
//import { EjercicioUno } from '../../@shared/components/ejercicios-w/ejercicio-uno/ejercicio-uno';
//import { Dashboard } from '../../@shared/components/dashboard/dashboard';
//import { EstadosComponent } from '../../@shared/components/estados-component/estados-component';
//import { PaisesLocalComponent } from '../../@shared/components/paises-local-component/paises-local-component';
import { PAISES_ROUTES } from '../../@views/paises/paises.routes';
import { PERSONAS_ROUTES } from '../../@views/personas/personas.routes';

export const routes: Routes = [

  { path: '', redirectTo: 'paises', pathMatch: 'full' },
  { path: 'paises', loadChildren: () => PAISES_ROUTES },
  { path: 'personas', loadChildren: () => PERSONAS_ROUTES },
  /* { path: '', component: Dashboard},
  { path: 'home', component: Home}, */
 /*  { path: '', component: Paises},
  { path: 'paises', component: Paises},
  { path: 'paises-local', component: PaisesLocalComponent},
  { path: 'estados', component: EstadosComponent},
  { path: 'cliente', component: ObtenerClienteComponent},
  { path: 'persona', component: PersonaComponent},
  { path: 'ejercicio-uno', component: EjercicioUno}, */
];
