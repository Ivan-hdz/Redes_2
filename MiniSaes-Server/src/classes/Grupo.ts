import {Materia} from './Materia';

export class Grupo {
  public nombre: string;
  public materias: Materia[];
  constructor() {
    this.nombre = '';
    this.materias = new Array<Materia>();
  }
}
