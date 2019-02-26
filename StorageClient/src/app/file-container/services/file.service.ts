import { Injectable } from '@angular/core';
import {Directory} from '../classes/Directory';
import {RESTService} from '../../shared/services/rest.service';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private rest: RESTService, private socket: Socket) { }
  private uploadStatus = this.socket.fromEvent<boolean>('uploadStatus');
  async rename(path: string, newName: string) {
    return await this.rest.doPatch<boolean>('file', path, newName);
  }
  async delete(path: string) {
    return await this.rest.doDelete<boolean>('file', path);
  }
  async get(path: string) {
    //DIEGO ESTUVO AQUI
    return await this.rest.doGet<File>(path);
  }
  async upload(file: any) {
    this.socket.emit('uploadFile', file);
    const status = await this.uploadStatus.toPromise();
    return status;
  }
}
