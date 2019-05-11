
export class Mensaje {
  autor: string;
  destinatario: string;
  fecha: string;
  hora: string;
  cuerpo: string;
  urlFoto: string;
  constructor() {
    this.autor = '';
    this.fecha = '';
    this.hora = '';
    this.cuerpo = '';
    this.urlFoto = '';
    this.destinatario = '';
  }
}
