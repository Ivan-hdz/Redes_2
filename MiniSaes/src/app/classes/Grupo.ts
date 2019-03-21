import {Materia} from './Materia';

export class Grupo {
  id: string;
  materias: Materia[];
  constructor() {
    this.id = '';
    this.materias = new Array<Materia>();
  }
}
