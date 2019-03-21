import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../services/alumno.service';
import {GrupoService} from '../../services/grupo.service';
import {Alumno} from '../../classes/Alumno';
import {Grupo} from '../../classes/Grupo';
import {Observable, of} from 'rxjs';
import {RouterService} from '../../services/router.service';

@Component({
  selector: 'app-alumno-horario',
  templateUrl: './alumno-horario.component.html',
  styleUrls: ['./alumno-horario.component.scss']
})
export class AlumnoHorarioComponent implements OnInit {
  alumnoSelected: Alumno;
  grupoSelected: Grupo;
  alumnos$: Observable<Alumno[]>;
  grupos$: Observable<Grupo[]>;
  constructor(private alumnoServ: AlumnoService, private grupoServ: GrupoService, public router: RouterService) {
    this.alumnos$ = of([]);
    this.grupos$ = of([]);
  }

  ngOnInit() {
    this.alumnos$ = this.alumnoServ.getAll();
    this.grupos$ = this.grupoServ.getAll();
  }
  linkAlumnoHorario() {
    this.alumnoSelected.grupo = this.grupoSelected;
    this.alumnoServ.new(this.alumnoSelected);
    alert('¡Se le asoció el horario del grupo ' + this.grupoSelected.id + ' a la boleta: ' + this.alumnoSelected.id + '!');
    this.router.goHorarioHome();
  }
}
