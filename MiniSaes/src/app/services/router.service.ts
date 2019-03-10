import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
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
}
