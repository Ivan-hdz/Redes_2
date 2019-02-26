import { Injectable } from '@angular/core';
import {Directory} from '../classes/Directory';
import {RESTService} from '../../shared/services/rest.service';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  private uploadStatus = this.socket.fromEvent<boolean>('uploadStatus');
  constructor(private rest: RESTService, private socket: Socket) { }
  async rename(path: string, newName: string) {
    return await this.rest.doPatch<boolean>('directory', path, newName);
  }
  async delete(path: string) {
    return await this.rest.doDelete<boolean>('directory', path);
  }
  async post(path: string) {
    return await this.rest.doPost<boolean>('directory', path);
  }
  async get(path: string) {
    return await this.rest.doGet<Directory>(path);
  }
  async upload(directory: any) {
    this.socket.emit('uploadDirectory', directory);
    const status = await this.uploadStatus.toPromise();
    return status;
  }
}
