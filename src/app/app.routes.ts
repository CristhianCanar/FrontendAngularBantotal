import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Paises } from './components/paises/paises';
import { ObtenerClienteComponent } from './components/obtener-cliente-component/obtener-cliente-component';
import { PersonaComponent } from './components/persona-component/persona-component';
import { EjercicioUno } from './components/ejercicios-w/ejercicio-uno/ejercicio-uno';
import { Dashboard } from './components/dashboard/dashboard';
import { EstadosComponent } from './components/estados-component/estados-component';
import { PaisesLocalComponent } from './components/paises-local-component/paises-local-component';

export const routes: Routes = [
  /* { path: '', component: Dashboard},
  { path: 'home', component: Home}, */
  { path: '', component: Paises},
  { path: 'paises', component: Paises},
  { path: 'paises-local', component: PaisesLocalComponent},
  { path: 'estados', component: EstadosComponent},
  { path: 'cliente', component: ObtenerClienteComponent},
  { path: 'persona', component: PersonaComponent},
  { path: 'ejercicio-uno', component: EjercicioUno},
];
