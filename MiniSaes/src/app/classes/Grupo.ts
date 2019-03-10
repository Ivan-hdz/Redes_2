import {Materia} from './Materia';

export class Grupo {
  nombre: string;
  materias: Materia[];
  constructor() {
    this.nombre = '';
    this.materias = new Array<Materia>();
  }
}
