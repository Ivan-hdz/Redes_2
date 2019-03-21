import {Grupo} from './Grupo';

export class Alumno {
  id: string;
  nombre: string;
  pApellido: string;
  sApellido: string;
  urlFoto: string;
  grupo: Grupo;
  constructor() {
    this.id = '';
    this.nombre = '';
    this.pApellido = '';
    this.sApellido = '';
    this.urlFoto = '';
    this.grupo = new Grupo();
  }
}
