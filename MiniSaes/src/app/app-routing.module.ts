import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscripcionComponent} from './components/inscripcion/inscripcion.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {HorarioComponent} from './components/horario/horario.component';
import {HorarioRegistroComponent} from './components/horario-registro/horario-registro.component';
import {AlumnoHorarioComponent} from './components/alumno-horario/alumno-horario.component';
import {ConsultarAlumnoComponent} from './components/consultar-alumno/consultar-alumno.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'inscripcion', component: InscripcionComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'horario-registro', component: HorarioRegistroComponent},
  {path: 'alumno-horario', component: AlumnoHorarioComponent},
  {path: 'consultar-alumno', component: ConsultarAlumnoComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
