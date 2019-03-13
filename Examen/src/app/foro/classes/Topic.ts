import {Mensaje} from './Mensaje';

export class Topic {
  nombre: string;
  mensajes: Mensaje[];
  constructor() {
    this.nombre = '';
    this.mensajes = new Array<Mensaje>();
  }
}
