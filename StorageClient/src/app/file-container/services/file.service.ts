import { Injectable } from '@angular/core';
import {Directory} from '../classes/Directory';
import {RESTService} from '../../shared/services/rest.service';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private rest: RESTService) {
  }
  async rename(path2Send: string, newPath2Send: string) {
    const toSend = {
      path: path2Send,
      newPath: newPath2Send
    };
    return await this.rest.doPatch<boolean>('file', toSend);
  }
  async delete(path2Send: string) {
    const gson = {
      path: path2Send
    };
    return  this.rest.doDelete<Directory>('file', gson);
  }
  get(path2Send: string = 'usr1') {
    const gson = {
      path: path2Send
    };
    // return  this.rest.doGet('file', gson);
    window.open(this.rest.endPoint + 'file?path=' + path2Send);
  }

}
