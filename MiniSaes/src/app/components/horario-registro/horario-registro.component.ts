import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterService} from '../../services/router.service';
import {Materia} from '../../classes/Materia';
import {Grupo} from '../../classes/Grupo';
import {Observable, of} from 'rxjs';
import {MatTable, MatTableDataSource} from '@angular/material';
import {GrupoService} from '../../services/grupo.service';

@Component({
  selector: 'app-horario-registro',
  templateUrl: './horario-registro.component.html',
  styleUrls: ['./horario-registro.component.scss']
})
export class HorarioRegistroComponent implements OnInit {
  grupo: Grupo;
  materiaToAdd: Materia;
  a: Observable<Materia[]>;
  dataSource: Materia[];
  @ViewChild('table') table: MatTable<Materia>;
  displayedColumns = ['nombreMateria', 'profesor', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  constructor(public router: RouterService, private grupoServ: GrupoService) {
    this.grupo = new Grupo();
    this.materiaToAdd = new Materia();
  }
  addMateria() {
    if(confirm('¿El horario de la materia es correcta? Una vez agregada la materia no se puede modificar el horario.')) {
      this.grupo.materias.push(JSON.parse(JSON.stringify(this.materiaToAdd)));
      this.materiaToAdd = new Materia();
      this.table.dataSource = new MatTableDataSource<Materia>(this.grupo.materias);
    } else {
      return false;
    }
  }
  guardarHorario() {
      this.grupoServ.add(this.grupo);
      this.router.goHorarioHome();
  }

  ngOnInit() {
  }

}
