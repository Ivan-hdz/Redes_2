import {Component, OnInit, ViewChild} from '@angular/core';
import {Alumno} from '../../classes/Alumno';
import {Observable, of} from 'rxjs';
import {Materia} from '../../classes/Materia';
import {AlumnoService} from '../../services/alumno.service';
import {MatTable, MatTableDataSource} from '@angular/material';
import {RouterService} from '../../services/router.service';

@Component({
  selector: 'app-consultar-alumno',
  templateUrl: './consultar-alumno.component.html',
  styleUrls: ['./consultar-alumno.component.scss']
})
export class ConsultarAlumnoComponent implements OnInit {
  alumnos$: Observable<Alumno[]>;
  dataSource: Materia[];
  alumnoSelected: Alumno;
  @ViewChild('table') table: MatTable<Materia>;
  @ViewChild('table2') table2: MatTable<Calificaciones>;
  displayedColumns = ['nombreMateria', 'profesor', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  columsx2 = ['nombreMateria', '1er', '2do', '3er', 'final'];
  constructor(private alumnoServ: AlumnoService, public router: RouterService) {
    this.alumnos$ = of([]);
    this.alumnoSelected = new Alumno();
    this.alumnoSelected.urlFoto = 'https://vistana-web-static.s3.amazonaws.com/vistana-web/assets/img/profile/profile-pic-thumb.png';
  }
  onAlumnoSelected(al: Alumno) {
    this.alumnoSelected = al;
    const calif = new Array<Calificaciones>();
    this.table.dataSource = new MatTableDataSource<Materia>(al.grupo.materias);
    for (const m of al.grupo.materias) {
      const a = this.getRand().toFixed(2);
      const b = this.getRand().toFixed(2);
      const c = this.getRand().toFixed(2);
      calif.push({
        nombre: m.nombre,
        primer: a,
        segundo: b,
        tercer: c,
        final: ((parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10)) / 3).toFixed(2)
      });
    }

    this.table2.dataSource = new MatTableDataSource<Calificaciones>(calif);
  }
  ngOnInit() {
    this.alumnos$ = this.alumnoServ.getAll();
  }
  getRand() {
    return Math.random() * (10 - 0);
  }

}
interface Calificaciones {
  nombre: string;
  primer: string;
  segundo: string;
  tercer: string;
  final: string;
}
