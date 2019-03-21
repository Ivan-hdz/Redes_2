import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router.service';
import {Alumno} from '../../classes/Alumno';
import {AlumnoService} from '../../services/alumno.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
  public alumnoToUpload: Alumno;
  constructor(public router: RouterService, private alumnoServ: AlumnoService) {
    this.alumnoToUpload = new Alumno();
  }

  ngOnInit() {
  }
  onSubmit() {
    this.alumnoServ.new(this.alumnoToUpload);
    alert('¡Alumno creado!');
    this.router.goHome();
  }

}
