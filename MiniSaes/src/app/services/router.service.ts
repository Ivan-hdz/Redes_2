import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  goConsultarAlumno(){
    this.router.navigate(['/consultar-alumno']);
  }
  goHome() {
    this.router.navigate(['/']);
  }
  goInscripcion() {
    this.router.navigate(['/inscripcion']);
  }
  goHorarioHome() {
    this.router.navigate(['/horario']);
  }
  goHorarioRegistro() {
    this.router.navigate(['/horario-registro']);
  }
  goAkumnoHorario() {
    this.router.navigate(['/alumno-horario']);
  }
}
