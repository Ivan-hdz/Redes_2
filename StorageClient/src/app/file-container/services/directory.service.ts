import { Injectable } from '@angular/core';
import {Directory} from '../classes/Directory';
import {RESTService} from '../../shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  public ROOT = 'usr1';
  constructor(private rest: RESTService) {
  }
  async rename(path2Send: string, newPath2Send: string) {
    const toSend = {
      path: path2Send,
      newPath: newPath2Send
    };
    return await this.rest.doPatch<boolean>('directory', toSend);
  }
  async delete(path2Send: string) {
    const gson = {
      path: path2Send
    };
    return  this.rest.doDelete<Directory>('directory', gson);
  }
  async post(pathComp: string) {
    const toSend = {
      path: pathComp
    };
    return await this.rest.doPost<boolean>('directory', toSend);
  }
  get(path2Send: string = 'usr1') {
    const gson = {
      path: path2Send
    };
    return  this.rest.doGet<Directory>('directory', gson);
  }
}
