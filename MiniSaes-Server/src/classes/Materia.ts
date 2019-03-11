import {HorarioMateria} from './HorarioMateria';

export class Materia {
  public idMateria: number;
  public nombreMateria: string;
  public profesor: string;
  public horario: HorarioMateria;
  constructor() {
    this.idMateria = 0;
    this.nombreMateria = '';
    this.profesor = '';
    this.horario = new HorarioMateria();
  }
}
