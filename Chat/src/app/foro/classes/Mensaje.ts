import {ENDPOINT} from '../../../environments/environment';

export class Mensaje {
  autor: string;
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
    /*
    this.fecha = '02/05/2019';
    this.cuerpo = 'Este es un ejemplo de texto';
    this.autor = 'Iván Hernández';
    this.hora = '15:04';
    this.urlFoto = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';*/
  }
}
