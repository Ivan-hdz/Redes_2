export class Mensaje {
  autor: string;
  fecha: string;
  hora: string;
  id: number;
  cuerpo: string;
  urlFoto: string;
  constructor() {
    this.autor = '';
    this.fecha = '';
    this.hora = '';
    this.id = -1;
    this.cuerpo = '';
    this.urlFoto = '';
  }
}
