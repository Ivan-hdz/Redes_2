import { Injectable } from '@angular/core';
import {Grupo} from '../classes/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  grupos: Grupo[];
  constructor() {
    this.grupos = new Array<Grupo>();
  }
  add(g: Grupo) {
    this.grupos.push(g);
  }
  downloadFromServer() {
  }
  uploadToServer() {
  }
  remove(grupoName: string) {
    for (let g of this.grupos) {
      if (g.nombre === grupoName) {
        g = null;
      }
    }
  }
  get(grupoName: string) {
    for (const g of this.grupos) {
      if (g.nombre === grupoName) {
        return g;
      }
    }
  }
}
