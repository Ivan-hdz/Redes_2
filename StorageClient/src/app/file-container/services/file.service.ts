import { Injectable } from '@angular/core';
import {Directory} from '../classes/Directory';
import {RESTService} from '../../shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private rest: RESTService) { }
  async rename(path: string, newName: string) {
    return await this.rest.doPatch<boolean>('file', path, newName);
  }
  async delete(path: string) {
    return await this.rest.doDelete<boolean>('file', path);
  }
  async get(path: string) {
    return await this.rest.doGet<File>(path);
  }
}
