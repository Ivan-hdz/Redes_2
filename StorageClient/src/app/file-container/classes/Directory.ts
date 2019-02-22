import {MyFile} from './MyFile';

export class Directory {
  name: string;
  files: MyFile[];
  directories: Directory[];
  parent: Directory;
  path: string;
  size: string;

  constructor(name: string = 'Example dir', size: string = '', files: MyFile[] = [new MyFile()], directories: Directory[] = [], parent: Directory = null, path: string = '/src/ejemplo/'){
    this.name = name;
    this.files = files;
    this.path = path;
    this.directories = directories;
    this.size = size;
    this.parent = parent;
  }
}
