import { Injectable } from '@angular/core';
import {Grupo} from '../classes/Grupo';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private grupo$: Observable<Grupo> = this.socket.fromEvent('getGrupo');
  private grupos$: Observable<Grupo[]> = this.socket.fromEvent('getAllGrupo');
  constructor(private socket: Socket) {
  }
  new(g: Grupo) {
    this.socket.emit('newGrupo', g);
  }
  getOne(id: string): Observable<Grupo> {
    this.socket.emit('getGrupo', id);
    return this.grupo$;
  }
  getAll(): Observable<Grupo[]> {
    this.socket.emit('getAllGrupo');
    return this.grupos$;
  }
}
