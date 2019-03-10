import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { HorarioComponent } from './components/horario/horario.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatButtonModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlumnoService} from './services/alumno.service';
import {GrupoService} from './services/grupo.service';
import {HorarioService} from './services/horario.service';
import {MateriaService} from './services/materia.service';
import {RouterService} from './services/router.service';
import { HorarioRegistroComponent } from './components/horario-registro/horario-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InscripcionComponent,
    HorarioComponent,
    HorarioRegistroComponent,
    CalificacionesComponent,
    WelcomeComponent,
    HorarioRegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AlumnoService, GrupoService, HorarioService, MateriaService, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
