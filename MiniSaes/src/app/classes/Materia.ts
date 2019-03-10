import {HorarioMateria} from './HorarioMateria';

export class Materia {
  idMateria: number;
  nombreMateria: string;
  profesor: string;
  horario: HorarioMateria;
  constructor() {
    this.idMateria = 0;
    this.nombreMateria = '';
    this.profesor = '';
    this.horario = new HorarioMateria();
  }
}
