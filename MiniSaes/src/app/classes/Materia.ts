import {HorarioMateria} from './HorarioMateria';

export class Materia {
  nombre: string;
  profesor: string;
  horario: HorarioMateria;
  constructor() {
    this.nombre = '';
    this.profesor = '';
    this.horario = new HorarioMateria();
  }
}
