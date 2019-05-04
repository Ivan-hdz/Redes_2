import {Mensaje} from './Mensaje';

export class Topic {
  nombre: string;
  mensajes: Mensaje[];
  constructor(nombre: string = 'Nombre por defecto') {
    this.nombre = nombre;
    this.mensajes = new Array<Mensaje>();
  }
}
