import {MyFile} from './MyFile';

export class Directory {
  name: string;
  files: MyFile[];
  directories: Directory[];
  parent: string;
  path: string;
  size: string;

  constructor( parent: string = null, name: string = 'Nueva_carpeta', size: string = '0 MB', files: MyFile[] = [], directories: Directory[] = []) {
    this.files = files;
    if (parent == null) {
      this.path = '/';
      this.name = 'root';
      parent = '';
    } else {
      this.path = parent + this.name + '/';
      this.name = name;
    }
    this.directories = directories;
    this.size = size;
    this.parent = parent;
  }
}
