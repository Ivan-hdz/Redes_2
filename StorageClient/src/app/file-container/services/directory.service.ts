import { Injectable } from '@angular/core';
import {Directory} from '../classes/Directory';
import {RESTService} from '../../shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  constructor(private rest: RESTService) { }
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
}
