import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Paises } from './components/paises/paises';
import { ObtenerClienteComponent } from './components/obtener-cliente-component/obtener-cliente-component';
import { PersonaComponent } from './components/persona-component/persona-component';
import { EjercicioUno } from './components/ejercicios-w/ejercicio-uno/ejercicio-uno';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Dashboard},
  { path: 'home', component: Home},
  { path: 'paises', component: Paises},
  { path: 'cliente', component: ObtenerClienteComponent},
  { path: 'persona', component: PersonaComponent},
  { path: 'ejercicio-uno', component: EjercicioUno},
];
