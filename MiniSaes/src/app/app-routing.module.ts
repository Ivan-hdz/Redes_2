import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscripcionComponent} from './components/inscripcion/inscripcion.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {HorarioComponent} from './components/horario/horario.component';
import {HorarioRegistroComponent} from './components/horario-registro/horario-registro.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'inscripcion', component: InscripcionComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'horario-registro', component: HorarioRegistroComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
