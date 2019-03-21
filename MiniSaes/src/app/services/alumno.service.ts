import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Alumno} from '../classes/Alumno';
import {Observable} from 'rxjs';
import {Grupo} from '../classes/Grupo';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumno$: Observable<Alumno> = this.socket.fromEvent('getAlumno');
  private alumnos$: Observable<Alumno[]> = this.socket.fromEvent('getAllAlumno');
  constructor(private socket: Socket) { }
  new(al: Alumno) {
    this.socket.emit('newAlumno', al);
  }
  getOne(id: string): Observable<Alumno> {
    this.socket.emit('getAlumno', id);
    return this.alumno$;
  }
  getAll(): Observable<Alumno[]> {
    this.socket.emit('getAllAlumno');
    return this.alumnos$;
  }
}
